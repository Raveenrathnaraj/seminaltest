'use client';
import React, { useState, useEffect } from 'react';
import emojiData from '@/data/emojiData'; // You can replace this with your own emoji data or fetch it from an API
import { EmojiType } from 'next/dist/compiled/@vercel/og/emoji';
import Link from 'next/link';

interface Emoji {
  name: string;
  symbol: string;
  keywords: string;
}

const EmojiFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [filteredEmojis, setFilteredEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const emojis = emojiData.filter((emoji) =>
      emoji.keywords.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmojis(emojis);
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    setShowPopover(value.length > 0);
  };

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col items-start'>
          <span className='text-lg font-bold mb-4'>Emoji Finder</span>

          <input
            type='text'
            placeholder='Search emojis...'
            value={searchTerm}
            onChange={handleInputChange}
            className='px-2 py-2 w-64 rounded-md border focus:outline-none focus:border-blue-500 text-black'
          />

          {showPopover && (
            <div className='mt-2 p-2 bg-white rounded-md w-64 max-h-64 overflow-y-auto text-black'>
              {filteredEmojis.length > 0 ? (
                filteredEmojis.map((emoji) => (
                  <div key={emoji.symbol} className='flex items-center m-2'>
                    <span className='mr-2'>{emoji.symbol}</span>
                    <span>{emoji.name}</span>
                  </div>
                ))
              ) : (
                <p className='text-gray-600'>No emojis found.</p>
              )}
            </div>
          )}
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='text-lg font-bold mb-4'>Searchable Keywords</h2>
          <div className='flex'>
            <ul className='list-decimal mr-12'>
              {emojiData
                .map((item, i) => {
                  return <li key={i}>{item.name}</li>;
                })
                .slice(0, 15)}
            </ul>
            <ul className='list-decimal ml-12'>
              {emojiData
                .map((item, i) => {
                  return <li key={i}>{item.name}</li>;
                })
                .slice(15, 30)}
            </ul>
          </div>
        </div>
      </div>
      <div className='my-20 border rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-2'>Instructions:</h2>
          <h2 className='text-lg font-bold mb-2'>Duration: 1 hrs</h2>
        </div>
        <ol className='list-decimal ml-4'>
          <li>Create a layout for the Emoji Finder application.</li>
          <li>
            Include an input field for searching emojis and a section to display
            the results.
          </li>
          <li>
            Add a component to render individual emojis with their names and
            symbols.
          </li>
          <li>
            Use the given emoji dataset to fetch emoji information and store the
            emoji data in the project.
          </li>
          <li>
            Ensure the data includes information like the emoji symbol, name,
            and category.
          </li>
          <li>
            Add an event handler to the search input field to capture user
            input.
          </li>
          <li>
            Implement a filtering mechanism to match the user input with emoji
            names or symbols.
          </li>
          <li>Update the displayed emojis based on the search results.</li>
          <li>Render the filtered emojis in the results section.</li>
          <li>
            Ensure the emojis are displayed in a visually appealing manner, with
            their names and symbols clearly visible.
          </li>
        </ol>
        <div className='mt-5'>
          <p>
            Starter template for the above challenge is given in the below
            sandbox link
          </p>
          <Link
            href={
              'https://codesandbox.io/s/agitated-wright-cs455t?file=/src/App.js'
            }
            target='_blank'
            className='underline text-blue-600 mt-12'
          >
            Sandbox Template
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmojiFinder;
