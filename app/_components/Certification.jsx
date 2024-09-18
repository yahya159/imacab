import React from 'react';

function Certification() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto text-center px-4">
        {/* Gradient Text */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mb-8 drop-shadow-lg">
  Our Certifications
</h2>


        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We are proud of our certifications that demonstrate our commitment to quality and innovation.
        </p>

        {/* Grid of Smaller Certification Images */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-10 gap-4">
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-01.webp" alt="Certification 1" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/Certification-BV-1.webp" alt="Certification 3" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-03.webp" alt="Certification 4" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-04.webp" alt="Certification 5" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-05.webp" alt="Certification 6" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-06.webp" alt="Certification 7" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-07.webp" alt="Certification 8" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-08.webp" alt="Certification 9" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/certafication-09.webp" alt="Certification 10" className="w-full h-auto"/>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 p-3">
            <img src="/NM-01.webp" alt="Certification 11" className="w-full h-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certification;
