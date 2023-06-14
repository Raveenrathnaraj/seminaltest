import Link from 'next/link';
import React, {Fragment} from 'react';

function Navbar() {
  return (
    <div className='flex py-4 px-2 sm:px-10 box-border w-full items-center md:justify-between justify-center'>
      <div className='flex items-center'>
        <Link href={'/'} className='flex items-center gap-3'>
          <div className='inline-block w-12 h-12 rounded-full bg-seminal shadow-seminal' />
          <div className={`font-sans text-2xl font-bold`}>Seminal</div>
        </Link>
      </div>
      <div className='items-center hidden md:flex'>
        {/* <Link href={'/css'} className='mr-5'>
          <div>CSS Test</div>
        </Link>
        <Link href={'/react'}>
          <div>React Test</div>
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;