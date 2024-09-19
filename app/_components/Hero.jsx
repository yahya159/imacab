import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <header className="bg-gray-100 dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white leading-snug lg:text-5xl">
            <span
              className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-lg"
            >
              IMACAB
            </span>
            , YOUR PARTNER IN ELECTRIC CABLES
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 lg:text-xl">
            A global offer for a complete solution with unmatched quality and innovation in the industry.
          </p>

          {/* PDF Download Button */}
          <a href="/Catalogue-Cables-2024-web.pdf" download>
            <button className="mt-8 px-8 py-3 text-sm font-medium text-white uppercase bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300">
              Download Cable Catalogue 2024
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src="/Engineer-working-with-server-equipment-and-switchboard-[Converted].png"
            alt="Hero Image"
            width={550}
            height={550}
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
