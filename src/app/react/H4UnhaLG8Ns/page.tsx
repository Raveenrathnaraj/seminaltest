'use client';
import React, { useEffect, useState } from 'react';
import './blog.css';

import BlogCard from '@/components/BlogCard';
import { Blog, Response } from '@/settings/type';
import SeminalBouncingLoader from '@/components/SeminalBouncingLoader';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState('LOADING');

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.slingacademy.com/v1/sample-data/blog-posts'
      );
      const data: Response = await response.json();
      setBlogPosts(data.blogs);
      setIsLoading('SUCCESS');
    } catch (error) {
      console.log('Error fetching blog posts:', error);
      setIsLoading('ERROR');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='newspaper-font'>
        {isLoading === 'LOADING' ? (
          <SeminalBouncingLoader />
        ) : isLoading === 'SUCCESS' ? (
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className='w-full mt-5 flex items-center flex-col'>
            <span className='text-red-500 text-4xl text-center'>
              Error Fetchin Try Again Later
            </span>
          </div>
        )}
      </div>
      <div className='my-20 border rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-2'>Instructions:</h2>
          <h2 className='text-lg font-bold mb-2'>Duration: 1 hrs</h2>
        </div>
        <ol className='list-decimal ml-4'>
          <li>
            Use the API endpoint (
            <a
              href='https://api.slingacademy.com/v1/sample-data/blog-posts'
              className='text-blue-500 underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://api.slingacademy.com/v1/sample-data/blog-posts
            </a>
            ) to fetch blog data.
          </li>
          <li>
            Display the fetched blog data as given cards in the React project.
          </li>
          <li>
            Add an onClick event handler to the blog card component&lsquo;s
            &lsquo;read-more&rsquo; button.
          </li>
          <li>When a read-more is clicked, redirect the user to a new page.</li>
          <li>
            Create a new page/component to display the single blog information.
          </li>
          <li>Design the single blog page to resemble a given layout.</li>
          <li>
            Use the second API endpoint ({' '}
            <a
              href='https://api.slingacademy.com/v1/sample-data/blog-posts'
              className='text-blue-500 underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://api.slingacademy.com/v1/sample-data/blog-posts/id
            </a>
            ) to fetch the specific blog information.
          </li>
          <li>
            Pass the blog ID as a parameter to the API to retrieve the correct
            blog data for the single blog page.
          </li>
        </ol>
        <div className='mt-5'>
          <p>
            Starter template for the above challenge is given in the below
            sandbox link
          </p>
          <Link
            href={''}
            target='_blank'
            className='underline text-blue-600 mt-12'
          >
            Sandbox Template
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
