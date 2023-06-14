'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BlogCardProps } from '@/settings/type';

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { id, photo_url, title, content_text } = post;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gray-100 p-6 rounded-lg shadow-md transition duration-300 transform ${
        isHovered ? 'hover:scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='relative bg-cover bg-center h-40 sm:h-52 md:h-64 rounded-lg'
        style={{ backgroundImage: `url(${photo_url})` }}
      />
      <div className='mt-4'>
        <h3 className='text-2xl font-semibold text-black text-left h-20'>
          {title}
        </h3>
        <p className='line-clamp-3 text-black'>{content_text}</p>
        <Link
          className='text-blue-500 font-semibold mt-2 cursor-pointer'
          href={`/react/H4UnhaLG8Ns/${id}`}
          passHref
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
