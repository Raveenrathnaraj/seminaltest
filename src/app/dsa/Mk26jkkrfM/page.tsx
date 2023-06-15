import React from 'react';

function page() {
  return (
    <div className='mt-5'>
      <p className='text-lg mb-3'>Problem Statement</p>
      <div className='border rounded-lg p-5'>
        Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 1</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [9,6,4,2,3,5,7,0,1]
        </div>
        <div>
          Output: 8
        </div>
        <div>
          Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 2</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [0,1]
        </div>
        <div>
          Output: 2
        </div>
        <div>
          Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 3</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: nums = [3,0,1]
        </div>
        <div>
          Output: 2
        </div>
        <div>
          Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
          Input: nums = [3,3], target = 6
        </div>
      </div>
    </div>

  );
}

export default page;