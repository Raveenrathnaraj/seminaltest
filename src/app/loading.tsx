import SeminalBouncingLoader from './SeminalBouncingLoader';
import React from 'react'

function loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <SeminalBouncingLoader/>
    </div>
  )
}

export default loading