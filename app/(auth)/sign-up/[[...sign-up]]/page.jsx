"use client";

import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://www.imacab.net/wp-content/uploads/2022/07/lost-places-1801660_1280-1.jpg")',
        }}
      >
        {/* Dark blue gradient overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="mb-6">
          <Image 
            src="/logo-imacab-white.svg" 
            alt="Imacab Logo" 
            width={150} 
            height={150} 
            className="drop-shadow-lg transform transition duration-300 hover:scale-105 mt-2"
          />
        </div>

        {/* SignUp Component */}
        <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg m">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
