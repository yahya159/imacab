'use client';
import React from 'react';

import Image from 'next/image';

function Footer() {
  return (
 (
      <footer className="bg-gray-300 text-white py-8 mt-7">
        <div className="container mx-auto text-center space-y-4">
          {/* Logo and Company Info */}
          <aside>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="inline-block"
            />

            <p className="font-bold text-xl" style={{ color: '#372b86' }}>
              Ⓒ 2024, IMACAB
              <br />
              Providing reliable tech since 1992
            </p>

            <p className="text-gray-700">
              Copyright © {new Date().getFullYear()} - All rights
              reserved
            </p>
          </aside>

          {/* Social Media Icons */}
          <nav className="flex justify-center space-x-6">
            {/* Facebook Icon */}
            <a
              href="https://web.facebook.com/imacabmaroc/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-2 rounded-full hover:text-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/imacabmaroc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-2 rounded-full hover:text-pink-500 transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 2a2 2 0 110 4 2 2 0 010-4zm4.5-2c-.828 0-1.5-.672-1.5-1.5S15.672 6 16.5 6 18 6.672 18 7.5 17.328 9 16.5 9z"></path>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/imacab-maroc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-2 rounded-full hover:text-blue-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.759 0 5-2.24 5-5v-14c0-2.76-2.241-5-5-5zm-11.75 19h-3.25v-9h3.25v9zm-1.625-10.25c-1.044 0-1.875-.831-1.875-1.875S5.581 5 6.625 5s1.875.831 1.875 1.875-.831 1.875-1.875 1.875zm13.375 10.25h-3.25v-4.5c0-1.085-.91-1.968-2.024-1.968s-2.026.883-2.026 1.968v4.5h-3.25v-9h3.25v1.438h.049c.44-.834 1.516-1.438 2.725-1.438 2.905 0 3.776 1.944 3.776 4.469v4.531z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    )
  );
}

export default Footer;
