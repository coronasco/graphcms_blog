import React, {useState, useEffect} from 'react';
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}) => {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug).then(result => setRelatedPosts(result))
    } else {
      getRecentPosts().then(result => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className='bg-white border border-gray-200 mb-8'>
        <h3 className='font-semibold p-8 text-gray-800 pb-8 border-b border-gray-100'>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
        {relatedPosts.map(post => (
          <Link href={`/posts/${post.slug}`} key={post.slug} >
            <div className='w-full cursor-pointer hover:bg-gray-100 transition border-b border-gray-100 duration-300 px-8 py-4'>
              <div className='flex items-center truncate'>
                <div className='w-16 flex-none'>
                  <img src={post.featuredImage.url} alt={post.title} className='rounded-full w-10 h-10 border'/>
                </div>
                <div>
                  <h4 className='text-sm '>{post.title}</h4>
                  <p className='text-[12px] text-gray-500'>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PostWidget;
