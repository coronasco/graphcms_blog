import React, { useContext } from 'react';
import Link from 'next/link'

const Header = () => {
  return <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-gray-200 pt-8 pb-4'>
        <div className='flex items-center justify-between'>
            <Link href='/'>logo</Link>
            <ul className='hidden md:flex space-x-4'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>Docs</Link>
                </li>
                <li>
                    <Link href='/'>Components</Link>
                </li>
                <li>
                    <Link href='/'>Websites</Link>
                </li>
            </ul>
            <div className='flex flex-col w-5 h-3 justify-between cursor-pointer md:hidden'>
                <div className='menu-btn'></div>
                <div className='menu-btn'></div>
                <div className='menu-btn'></div>
            </div>
        </div>
      </div>
  </div>;
};

export default Header;
