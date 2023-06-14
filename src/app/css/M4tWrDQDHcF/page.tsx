import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function page() {
  // -----------------------------------------------------------------
  // ----------------------Just a iteration test----------------------
  // -----------------------------------------------------------------

  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <div className='max-w-[90%] text-center'>
        <h2 className='text-4xl mb-4'>Products Seminal supports</h2>
        <div className='flex gap-3 flex-wrap md:flex-nowrap'>
          <div className='rounded-lg border border-solid border-white p-3 box-border'>
            <Image
              src='https://images.hdqwalls.com/download/beautiful-landscape-5k-c1-1920x1080.jpg'
              alt='dummyImage'
              className='w-full object-cover'
              width={'100'}
              height={'100'}
            />
            <div className='text-left flex flex-col justify-between'>
              <h4 className='text-3xl'>Cross-chain Platform</h4>
              <p>
                A middle ground where users from all different ecosystems come
                together to build cross-chain Dapps or to integrate multiple
                dapps on different ecosystems.
              </p>
              <Link className='mt-2' href='/'>
                Learn More
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-3 justify-between'>
            <div className='rounded-lg border border-solid border-white flex text-left h-full'>
              <Image
                src='https://images.hdqwalls.com/download/beautiful-landscape-5k-c1-1920x1080.jpg'
                alt='dummyImage'
                className='w-full object-cover'
                width={'100'}
                height={'100'}
              />
              <div className='pl-3 flex flex-col fh justify-evenly'>
                <div>
                  <h3 className='text-2xl'>Cross-chain wallet</h3>
                  <p>
                    Manage multiple chain native, non-native tokens from Link
                    single place. Seminal blockchain provides cross-chain
                    services.
                  </p>
                </div>
                <Link href='/'>Learn More</Link>
              </div>
            </div>
            <div className='flex gap-3 w-full'>
              <div className='rounded-lg border border-solid border-white text-left h-full w-full object-cover'>
                <Image
                  src='https://images.hdqwalls.com/download/beautiful-landscape-5k-c1-1920x1080.jpg'
                  alt='dummyImage'
                  className='w-full object-cover'
                  width={'100'}
                  height={'100'}
                />
                <div className='text-lg p-1'>Cross-chain block explorer</div>
                <Link className='p-1' href='/'>
                  Learn More
                </Link>
              </div>
              <div className='rounded-lg border border-solid border-white text-left h-full w-full'>
                <Image
                  src='https://images.hdqwalls.com/download/beautiful-landscape-5k-c1-1920x1080.jpg'
                  alt='dummyImage'
                  className='w-full object-cover'
                  width={'100'}
                  height={'100'}
                />
                <div className='text-lg p-1'>Cross-chain block explorer</div>
                <Link className='p-1' href='/'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6'>
        Create a similar layout in the Sanbox given below. The Layout must be
        responsive and should fit in all the screens
      </p>
      <p>Toggle to mobile view to check the mobile version of the layout</p>
      <Link
        href={'https://codesandbox.io/s/react-new'}
        target='_blank'
        className='underline text-blue-600'
      >
        Sandbox
      </Link>
    </div>
  );
}

export default page;
