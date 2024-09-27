'use client';
import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 mt-7">
      <div className="container mx-auto text-center space-y-6">
        {/* Logo and Company Info */}
        <aside>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="inline-block drop-shadow-lg transform transition duration-300 hover:scale-105"
          />
          <p className="font-bold text-xl mt-4 bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text">
            Ⓒ 2024, IMACAB
            <br />
            Providing reliable tech since 1992
          </p>
          <p className="text-gray-600 mt-2">
            © {new Date().getFullYear()} - All rights reserved
          </p>
        </aside>

        {/* Social Media Icons */}
        <nav className="flex justify-center space-x-6">
          {/* Facebook Icon */}
          <a
            href="https://web.facebook.com/imacabmaroc/?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition duration-300 shadow-lg transform hover:scale-105"
            aria-label="Facebook"
          >
            {/* Facebook SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-800"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/imacabmaroc/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition duration-300 shadow-lg transform hover:scale-105"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-800"
            >
              <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 2a2 2 0 110 4 2 2 0 010-4zm4.5-2c-.828 0-1.5-.672-1.5-1.5S15.672 6 16.5 6s1.5.672 1.5 1.5S17.328 9 16.5 9z" />
                </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/imacab-maroc/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition duration-300 shadow-lg transform hover:scale-105"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-800"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.759 0 5-2.24 5-5v-14c0-2.76-2.241-5-5-5zm-11.75 19h-3.25v-9h3.25v9zm-1.625-10.25c-1.044 0-1.875-.831-1.875-1.875S5.581 5 6.625 5s1.875.831 1.875 1.875-.831 1.875-1.875 1.875zm13.375 10.25h-3.25v-4.5c0-1.085-.91-1.968-2.024-1.968s-2.026.883-2.026 1.968v4.5h-3.25v-9h3.25v1.438h.049c.44-.834 1.516-1.438 2.725-1.438 2.905 0 3.776 1.944 3.776 4.469v4.531z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
