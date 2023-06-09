'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

function Page() {
  const timer = useRef<NodeJS.Timer>();

  const [minutes, setMinutes] = useState<number | string>('');
  const [seconds, setSeconds] = useState<number | string>('');
  const [passedTime, setPassedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [pausedTime, setPausedTime] = useState(0);

  const isDisabled = !minutes && !seconds;

  useEffect(() => {
    return () => {
      clearInterval(timer?.current);
    };
  }, []);

  const startTimer = () => {
    setIsStarted(true);
    timer.current = setInterval(() => {
      setPassedTime((t) => t - 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsStarted(false);
    clearInterval(timer.current);
  };

  const getTime = () => {
    const total = (Number(minutes) ?? 0) * 60 + (Number(seconds) ?? 0);
    if (total + passedTime < 0) {
      clearInterval(timer.current);
      setPassedTime(0);
      setIsStarted(false);
      return '00:00';
    }

    if (!isPaused) {
      let mins = Math.floor((total + passedTime) / 60);
      let sec = Math.floor((total + passedTime) % 60);
      return (
        (mins > 9 ? mins?.toString() : '0' + mins) +
        ':' +
        (sec > 9 ? sec?.toString() : '0' + sec)
      );
    } else {
      let mins = Math.floor(pausedTime / 60);
      let sec = Math.floor(pausedTime % 60);
      return (
        (mins > 9 ? mins?.toString() : '0' + mins) +
        ':' +
        (sec > 9 ? sec?.toString() : '0' + sec)
      );
    }
  };

  return (
    <div className='container'>
      <div className='w-full mt-5 flex items-center flex-col'>
        <div className='text-4xl mb-7'>React Timer</div>
        <div className='flex gap-5 items-center'>
          <div>Minutes: </div>
          <input
            className='text-black rounded-lg h-8'
            value={minutes}
            type='number'
            onChange={(e) =>
              setMinutes(e.target.value ? Number(e.target.value) : '')
            }
          />
          <div>Seconds: </div>
          <input
            className='text-black rounded-lg h-8'
            value={seconds}
            type='number'
            onChange={(e) =>
              setSeconds(e.target.value ? Number(e.target.value) : '')
            }
          />
        </div>
        <div className='flex gap-3 mt-5'>
          <button
            disabled={isDisabled}
            className={`border rounded-lg border-white p-2 w-32 ${
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={isStarted ? stopTimer : startTimer}
          >
            {isStarted ? 'Pause' : 'Start'}
          </button>
          <button
            disabled={isDisabled}
            className={`border rounded-lg border-white p-2 w-32 ${
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => {
              if (!isPaused) {
                setPausedTime(
                  (Number(minutes) ?? 0) * 60 +
                    (Number(seconds) ?? 0) +
                    passedTime
                );
              }
              setIsPaused((p) => !p);
            }}
          >
            {isPaused ? 'Unfreeze' : 'Freeze Time'}
          </button>
          <button
            disabled={isDisabled}
            className={`border rounded-lg border-white p-2 w-32 ${
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={() => {
              setPassedTime(0);
              setIsPaused(false);
              clearInterval(timer.current);
              setIsStarted(false);
            }}
          >
            Reset
          </button>
        </div>
        <div className='text-7xl my-8'>{getTime()}</div>
      </div>
      <div className='border rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-2'>Instructions:</h2>
          <h2 className='text-lg font-bold mb-2'>Duration: 1 hrs</h2>
        </div>
        <ol className='list-decimal ml-4'>
          <li>
            UI must have input fields for minutes and seconds with three buttons
            for start, freeze, reset and should also have a Timer.
          </li>
          <li>
            Input fields should be restricted to numbers, if feilds are empty
            button must be disabled.
          </li>
          <li>
            If the value in the second field exceeds 60, then it should be added
            with the minutes. (ex: 1min and 62 secs, should be displayed in
            timer as 02:02)
          </li>
          <li>
            When start button is clicked the start text should be changed to
            pause, and the timer should start to count down
          </li>
          <li>
            The value in the input field should not be changing, only the
            counter should be changed
          </li>
          <li>
            Once the countdown is over or the reset button is clicked the value
            in the Timer should be reseted to value in the input field
          </li>
          <li>
            If the freeze button is clicked the Timer in the UI should freezed,
            but timer must be running in background, and once resume is clicked
            the timer should continue with delayed time
          </li>
          <div className='mt-5'>
            <p>
              Starter template for the above challenge is given in the below
              sandbox link
            </p>

            <Link
              href={
                'https://codesandbox.io/s/seminal-react-ts-test-t5o331?file=/src/App.tsx'
              }
              target='_blank'
              className='underline text-blue-600'
            >
              Sandbox Template Typescript
            </Link>
            <br />
            <Link
              href={
                'https://codesandbox.io/s/seminal-react-js-test-7u6p1k?file=/src/App.js'
              }
              target='_blank'
              className='underline text-blue-600'
            >
              Sandbox Template Javascript
            </Link>
          </div>
        </ol>
      </div>
    </div>
  );
}

export default Page;
