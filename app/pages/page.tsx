import '@/app/ui/global.css';
import React from 'react'
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';


export default function Hello() {
  return (
    <>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>

    </>
  );
}




