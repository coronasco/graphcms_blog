import Link from 'next/link';
import React from 'react';
import moment from 'moment'

const PostDetail = ({post}) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text

        if(obj) {
            if(obj.bold) {
                modifiedText = (<b key={index}>{text}</b>)
            }

            if(obj.italic) {
                modifiedText = (<em key={index}>{text}</em>)
            }

            if(obj.underline) {
                modifiedText = (<u key={index}>{text}</u>)
            }
        }

        switch (type) {
            case 'heading-three':
              return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
              return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
              return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
              return (
                <img
                  key={index}
                  alt={obj.title}
                  height={obj.height}
                  width={obj.width}
                  src={obj.src}
                />
              );
            default:
              return modifiedText;
          }
    }

  return (
    <div className='bg-white '>
        <div className=''>
            <img src={post.featuredImage.url} alt={post.title} />
        </div>
        <div className='px-10 py-8'>
            <h1 className='font-semibold pb-4 mb-4 border-b border-gray-100 md:text-2xl text-lg'>{post.title}</h1>
            <p className='text-sm'>
            {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
            </p>

            <div className='mt-4 pt-4 border-t border-gray-100'>
                <span className='text-gray-500 text-sm'>posted on {moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
    </div>
  );
};

export default PostDetail;
