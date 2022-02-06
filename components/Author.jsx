import React from 'react';
import Link from 'next/link'

const Author = ({author}) => {
  return (
    <div className='bg-cyan-300 px-10 mt-16 py-8'>
      <div className='flex flex-col relative'>
        <img src={author.photo.url} alt={author.name} className='absolute top-[-70px] rounded-full object-cover w-20 h-20 shadow-xl' />
        <p className='text-sm text-gray-700 pt-8'> <span className='text-gray-500'> Author </span> <Link href='/about-daniel-zaharia'>{author.name}</Link></p>
        <p className='mt-2'>{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
