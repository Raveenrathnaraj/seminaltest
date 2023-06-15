import React from 'react';

function page() {
  return (
    <div className='mt-5'>
      <p className='text-lg mb-3'>Problem Statement</p>
      <div className='border rounded-lg p-5'>
        Given an array nums of size n, return the majority element.
        The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 1</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [2,2,1,1,1,2,2]
        </div>
        <div>
          Output: 2
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 2</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [3,2,3]
        </div>
        <div>
          Output: 3
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 3</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [3,3], target = 6
        </div>
        <div>
          Output: [0,1]
        </div>
      </div>
    </div>

  );
}

export default page;