import React from 'react';

function page() {
  return (
    <div className='mt-5'>
      <p className='text-lg mb-3'>Problem Statement</p>
      <div className='border rounded-lg p-5'>
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 1</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [2,7,11,15], target = 9
        </div>
        <div>
          Output: [0,1]
        </div>
        <div>
          Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 2</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [3,2,4], target = 6
        </div>
        <div>
          Output: [1,2]
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