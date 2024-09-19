import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 flex justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 mx-4 lg:mx-8 flex flex-col lg:flex-row max-w-6xl w-full shadow-lg rounded-xl">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage: "url('/Marquage-touret2-min.webp')",
            }}
          ></div>
        </div>

        {/* Text Section */}
        <div className="px-6 py-12 flex flex-col justify-center lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            IMACAB . SA
          </h2>
          <h3 className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-2">
            Manufacture of Electric Cables
          </h3>
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            A successful bet for <strong>INGELEC</strong>! Now the leader in the electric cable sector in Morocco, the IMACAB cable factory aims to consolidate its position in order to confirm its leadership.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            Cables for renewable energies, halogen-free cables, fire-resistant cables, special cables, and cables with Anglo-Saxon and international specifications represent new challenges allowing <strong>INGELEC</strong> to increase its local market shares and penetrate new international markets.
          </p>

          <div className="mt-8">
            <Link
              href="/about-ingelec"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
            >
              Learn More About Ingelec Group
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
