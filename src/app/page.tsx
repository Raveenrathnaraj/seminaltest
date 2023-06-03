import {seed} from '@/lib/seed';
import {sql} from '@vercel/postgres';
import Link from 'next/link';

export default async function Home() {


  return (
    <main className="flex flex-col items-center justify-center h-[50vh]">
      <div className='mb-2'>Please enter your Email Id</div>
      <input className='rounded-lg h-12 text-black  p-1' type='email' />
      {/* <div className='flex mt-7 gap-5'>
        <Link href={'/css'}><button className='border rounded-lg border-white p-2 w-48'>CSS Test</button></Link>
        <Link href={'/react'}><button className='border rounded-lg border-white p-2 w-48'>React Test</button></Link>
      </div> */}
    </main>
  );
}
