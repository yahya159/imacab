'use client'
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Yahya EL GATAA',
    position: 'Operations Manager at IMACAB',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      '“IMACAB has truly set the standard for innovation in the cable manufacturing industry. Their high-quality products and exceptional customer service make them the go-to partner for any project.”',
  },
  {
    name: 'Imad MANNI',
    position: 'CEO at TechWorld',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      '“Working with IMACAB has been a game-changer for our business. Their dedication to producing reliable and sustainable cables is unmatched in the industry.”',
  },
  {
    name: 'Yassine BEKKOUCH',   
    position: 'Product Designer at Artify',
    image:
      'https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote:
      '“The quality and durability of IMACAB cables are second to none. Their innovation and attention to detail ensure that we always get the best product for our designs.”',
  },
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial(
      currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <p className="text-xl font-medium text-blue-600">Testimonials</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          What our clients are saying
        </h1>

        <main className="relative z-20 w-full mt-8 flex items-center justify-center xl:mt-12">
          <div className="absolute w-full bg-blue-600 -z-10 h-96 rounded-2xl"></div>

          <div className="w-full max-w-4xl p-6 bg-blue-600 flex items-center rounded-2xl bg-transparent px-12 justify-between shadow-lg">
            <img
              className="h-24 w-24 rounded-full object-cover shadow-md md:h-[20rem] md:w-80 lg:h-[25rem] lg:w-[20rem] md:rounded-2xl"
              src={testimonials[currentTestimonial].image}
              alt={`${testimonials[currentTestimonial].name}`}
            />

            <div className="mt-2 md:mx-6 text-left">
              <div>
                <p className="text-2xl font-medium tracking-tight text-white">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-blue-200">{testimonials[currentTestimonial].position}</p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {testimonials[currentTestimonial].quote}
              </p>

              <div className="flex items-center justify-start mt-6 space-x-6">
                <button
                  onClick={handlePrev}
                  title="Previous testimonial"
                  className="p-2 text-white transition-colors duration-300 border rounded-full hover:bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  title="Next testimonial"
                  className="p-2 text-white transition-colors duration-300 border rounded-full hover:bg-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Testimonials;
