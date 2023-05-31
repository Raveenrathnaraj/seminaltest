import Link from 'next/link';
import Image from 'next/image';
import React, {Fragment} from 'react';

function Navbar() {
  return (
    <div className='flex py-4 px-2 sm:px-10 box-border w-full items-center md:justify-between justify-center'>
      <div className='flex items-center'>
        <Link href={'/'}>
          <div className={`font-sans text-7xl`}>Seminal</div>
        </Link>
      </div>
      <div className='items-center hidden md:flex'>
        <Link href={'/css'} className='mr-5'>
          <div>CSS Test</div>
        </Link>
        <Link href={'/react'}>
          <div>React Test</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;