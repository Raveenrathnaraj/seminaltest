import React from 'react';

function page() {
  return (
    <div className='mt-5'>
      <p className='text-lg mb-3'>Problem Statement</p>
      <div className='border rounded-lg p-5'>
        You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0s.
        Increment the large integer by one and return the resulting array of digits.
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 1</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: digits = [1,2,3]
        </div>
        <div>
          Output: [1,2,4]
        </div>
        <div>
          Explanation: The array represents the integer 123.
          Incrementing by one gives 123 + 1 = 124.
          Thus, the result should be [1,2,4].
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 2</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: digits = [4,3,2,1]
        </div>
        <div>
          Output: [4,3,2,2]
        </div>
        <div>
          Explanation: The array represents the integer 4321.
          Incrementing by one gives 4321 + 1 = 4322.
          Thus, the result should be [4,3,2,2].
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 3</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: digits = [9]
        </div>
        <div>
          Output: [1,0]
        </div>
        <div>
          Explanation: The array represents the integer 9.
          Incrementing by one gives 9 + 1 = 10.
          Thus, the result should be [1,0].
        </div>
      </div>
    </div>
  );
}

export default page;