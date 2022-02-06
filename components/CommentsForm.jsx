import React, {useRef, useState, useEffect} from 'react';
import {submitComment} from '../services'

const CommentsForm = ({slug}) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if(!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 6000)
    })
  }

  return (
    <div className='bg-white px-10 py-8 mt-8'>
      <h3 className='text-xl mb-8 font-semibold border-b border-gray-100 pb-4'>Leave a comment</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl} className='p-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Comment' name='comment'/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input type="text" ref={nameEl} className='p-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Your Name' name='name'/>
        <input type="text" ref={emailEl} className='p-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Your Email' name='email'/>
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='flex items-center'>
          <input ref={storeDataEl} type="checkbox" id='storeData' name='storeData' value='true'/>
          <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2 text-sm'>Save my name and email for next time i comment.</label>
        </div>
      </div>

      {error && <p className='text-xs text-red-500'>All fields are required.</p>}

      <div className='mt-8'>
        <button 
          type='button' 
          onClick={handleCommentSubmission}
          className='transition duration-300 bg-pink-600 hover:bg-indigo-600 text-sm font-semibold text-white inline-block px-4 py-2'
        >
          Post Comment
        </button>
        <p className='mt-4'>
          {showSuccessMessage && <span className='text-sm flex p-2 w-full bg-green-500 text-white mt-4'>Comment submitted for review.</span>}
        </p>
      </div>
      
    </div>
  );
};

export default CommentsForm;
