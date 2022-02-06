import React from 'react';
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className='bg-white border border-gray-200 pb-8 mb-8'>
      <div className='relative overflow-hidden border-b border-gray-100 mb-6'>
        <img 
          src={post.featuredImage.url} 
          alt={post.title} 
          className=' object-center h-80  w-full object-cover bg-no-repeat' 
        />
      </div>
      <div className='px-8'>
        <h1 className='transition duration-700 text-center md:text-left mb-4 cursor-pointer hover:text-gray-600 text-2xl font-semibold pb-4 pt-4 border-b border-gray-100'>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h1>
      </div>
      <div className='px-8 mb-8 text-center md:text-left text-gray-700'>
        {post.excerpt} <span className='text-blue-400'><Link href={`/posts/${post.slug}`}>Continue reading...</Link></span>
      </div>
      <div className='px-8 flex justify-center md:justify-start'>
        <div className='flex items-center space-x-4'>
          <img src={post.author.photo.url} alt={post.author.name} className='rounded-full object-cover w-10 h-10' />
          <p className='text-sm text-gray-700'> <span className='text-gray-500'>posted by</span> <Link href='/about-daniel-zaharia'>{post.author.name}</Link> | <span className='text-gray-500'>{moment(post.createdAt).format('MMM DD, YYYY')}</span></p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
