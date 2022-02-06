import React, {useState, useEffect} from 'react';
import moment from 'moment'
import parse from 'html-react-parser'
import {getComemnts, getComments} from '../services'
import { comment } from 'postcss';

const Comments = ({slug}) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then(res => setComments(res))
  }, []);
  
  
  return (
    <div className='bg-white px-10 py-8 mt-8'>
        {comments.length > 0 ? (
            <div>
              <h3 className='text-lg mb-8 font-semibold border-b border-gray-100 pb-4'>
                {comments.length}
                {' '}
                Comments
              </h3>
              {comments.map(com => (
                <div key={com.createdAt} className='mb-8 border-b border-gray-100 pb-4'>
                  <p className='mb-2 text-sm'>
                    <span>{com.name}</span>
                    {' '}
                    -
                    {' '}
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                  </p>
                  <p className='whitespace-pre-line text-gray-600 w-full'>
                    {parse(com.comment)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>There are no comments to show!</p>
            </div>
          )
        }
    </div>
  );
};

export default Comments;
