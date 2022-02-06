import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(newCategories => setCategories(newCategories))
  }, [])

  return <div className='flex flex-col bg-white mb-12 lg:mb-0'>
    <div className='px-10 py-8 border-b border-gray-100'>
      <h3 className='font-semibold'>Categories</h3>
    </div>
    {categories.map(cat => (
        <Link href={`/category/${cat.slug}`} key={cat.slug}>
          <div className='px-10 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-all duration-300 border-b border-gray-100'>
            {cat.name}
          </div>
        </Link>
      ) 
    )}
  </div>;
};

export default Categories;
