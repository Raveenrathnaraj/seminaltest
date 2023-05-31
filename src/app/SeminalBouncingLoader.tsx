import React from 'react';

function SeminalBouncingLoader() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mt-24 inline-block w-24 h-24 rounded-full bg-seminal shadow-seminal animate-bounce'>
      </div>
      <div className='w-12 h-4 bg-white rounded-[50%] animate-[scaling_2s_infinite]'>
      </div>
    </div>

  );
}

export default SeminalBouncingLoader;