"use client"

import { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

/**
 * @notice Define font for Clock component
 */
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function TopBar() {
  const weekday: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  /**
   * 
   * @notice This React component displays live datetime
   */
  const Clock = () => {
    const [datetime, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const hours: string = datetime.getHours().toString();
    const min: number = datetime.getMinutes();
    const minutes: string = (
      min < 10
        ? ("0").concat(min.toString())
        : min.toString()
    )

    return (
      <div className="flex-column text-right">
        <div className={roboto.className}>
          <p className="rounded-xl text-center w-full bg-white text-black font-mono font-bold text-sm">{hours}:{minutes}</p>
        </div>
        <div className="font-normal font-mono text-sm">
          {weekday[datetime.getDay() - 1]} {datetime.toLocaleDateString()}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 flex flex-row justify-between w-screen items-center p-2">
      <div className="flex flex-row items-center gap-0">
        <Link href="/">
          <h1 className="ml-2 p-2 font-bold">MY CODEFOLIO</h1>
        </Link>
        <FaCode size={20} />
      </div>
      <h2 className="mr-2 p-2">
        <Clock />
      </h2>
    </div>
  )
}
