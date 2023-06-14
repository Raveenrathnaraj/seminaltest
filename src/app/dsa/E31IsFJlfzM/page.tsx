'use client';
import React from 'react';

import Data from '../../../data/dsa.json';

const DSA1 = () => {
  const handleCopy = () => {
    const codeToCopy = JSON.stringify(Data);

    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        alert('Response copied to clipboard');
        console.log('Code copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy code to clipboard:', error);
      });
  };
  return (
    <div className='container'>
      <div className='border rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-2'>Instructions:</h2>
          <h2 className='text-lg font-bold mb-2'>Duration: 10 mins</h2>
        </div>
        <ol className='list-decimal ml-4'>
          <li>Copy and Paste the given code in Console.</li>
          <li>
            Convert the given array into the specified format - print it as
            output 1.
          </li>
          <li>
            From the result of output 1, display the price value greater than
            500 - print it as output 2.
          </li>
          <li>
            From the result of output 2, calculate the sum of all the prices -
            print it as output 3.
          </li>
        </ol>
      </div>
      <div className='mt-8'>
        <p className='text-xl font-bold'>Format</p>

        <div className='mt-4'>
          <p className='whitespace-pre-wrap'>
            id: 1,
            <br />
            title: iPhone 9,
            <br />
            description: An apple mobile which is nothing like apple,
            <br />
            price: 400,
            <br />
            images: [https://i.dummyjson.com/data/products/1/1.jpg],
            <br />
            thumbnail: https://i.dummyjson.com/data/products/1/thumbnail.jpg
          </p>
        </div>
        <div className='mt-5'>
          <a
            onClick={handleCopy}
            className='bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 rounded mt-4 inline-block'
            target='_blank'
            rel='noopener'
          >
            <p>Click to Copy Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DSA1;
