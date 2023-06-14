'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Blog } from '@/settings/type';
import SeminalBouncingLoader from '@/components/SeminalBouncingLoader';

const BlogPageContent = ({ params }: { params: { id: number } }) => {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.slingacademy.com/v1/sample-data/blog-posts/${params.id}`
        );
        const data: { blog: Blog } = await response.json();
        if (response.ok) {
          setBlog(data.blog);
        }
      } catch (error) {
        console.log('Error fetching blog post:', error);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  if (!params.id || !blog) {
    return <SeminalBouncingLoader />;
  }

  const {
    title,
    content_text,
    photo_url,
    created_at,
    updated_at,
    description,
    category,
    content_html,
  } = blog;

  const formattedCreatedDate = new Date(created_at)?.toLocaleDateString();
  const formattedCreatedTime = new Date(created_at)?.toLocaleTimeString();

  const formattedUpdatedDate = new Date(updated_at).toLocaleDateString();
  const formattedUpdatedTime = new Date(updated_at).toLocaleTimeString();

  return (
    <div className='  newspaper-font'>
      <div className='mx-auto p-4 rounded-lg'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold mb-4'>{title}</h1>
          <div className='text-yellow-100 text-sm'>
            <span>Created Date: {formattedCreatedDate}</span>
            <span className='mx-2'>|</span>
            <span>Created TIme: {formattedCreatedTime}</span>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='col-span-1'>
            <Image
              src={photo_url}
              alt={title}
              className='mb-4 rounded-lg'
              width={500}
              height={300}
            />
            <span className='text-red-500 text-lg mr-2'>
              {category.toUpperCase()}
            </span>
            <p className='text-base'>{description}</p>
          </div>
          <div className='col-span-3'>
            <div
              className='newspaper-content'
              dangerouslySetInnerHTML={{ __html: content_html }}
            />
            {/* <p className='text-sm'>{content_text}</p> */}
          </div>
        </div>

        {/* <div
          className='newspaper-content'
          dangerouslySetInnerHTML={{ __html: content_html }}
        /> */}
        <div className='flex text-cyan-300 text-sm mt-4 justify-end'>
          <span>Updated Date: {formattedUpdatedDate}</span>
          <span className='mx-2'>|</span>
          <span>Updated TIme: {formattedUpdatedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPageContent;
