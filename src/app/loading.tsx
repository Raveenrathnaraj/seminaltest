import SeminalBouncingLoader from '../components/SeminalBouncingLoader';
import React from 'react'

function loading() {
  return (
    <div className='w-screen h-screen absolute flex justify-center items-center'>
      <SeminalBouncingLoader/>
    </div>
  )
}

export default loading