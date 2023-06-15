import React from 'react';

function page() {
  return (
    <div className='mt-5'>
      <p className='text-lg mb-3'>Problem Statement</p>
      <div className='border rounded-lg p-5'>
        A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
        Given a string s, return true if it is a palindrome, or false otherwise.
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 1</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: s = &quot;A man, a plan, a canal: Panama&quot;
        </div>
        <div>
          Output: true
        </div>
        <div>
          Explanation: &quot;amanaplanacanalpanama&quot; is a palindrome.
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 2</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: s = &quot;race a car&quot;
        </div>
        <div>
          Output: false
        </div>
        <div>
          Explanation: &quot;raceacar&quot; is not a palindrome.
        </div>
      </div>
      <p className='text-lg mb-3 mt-5'>Sample 3</p>
      <div className='border rounded-lg p-5'>
        <div>
          Input: s = &quot; &quot;
        </div>
        <div>
          Output: true
        </div>
        <div>
          Explanation: s is an empty string &quot;&quot; after removing non-alphanumeric characters.
          Since an empty string reads the same forward and backward, it is a palindrome.
        </div>
      </div>
    </div>

  );
}

export default page;