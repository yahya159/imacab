'use client';
import React from 'react';
import Image from 'next/image';
import { PhoneCallIcon } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 mt-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="drop-shadow-lg transform transition duration-300 hover:scale-105"
          />
          <p className="font-bold text-xl mt-4 bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text">
            &copy; {new Date().getFullYear()}, IMACAB
          </p>
          <p className="text-gray-600 mt-2">
            Providing reliable tech since 1992
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about-ingelec" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/#contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info and Social Media Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="mb-2 flex items-center justify-center md:justify-start">
            <svg
              className="w-5 h-5 mr-2 text-blue-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Address Icon */}
              <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.33-1.946 5.522-5 9.797C8.946 14.522 7 11.33 7 9z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>Bd Ahl Loghlam, QI Sidi Moumen 20630 Casablanca - Morocco</span>
          </p>
          <div className='flex items-center justify-center md:justify-start'>
            <PhoneCallIcon className='w-5 h-5 mr-2 text-blue-800' />
            <span>+212 (05) 22 76 40 10</span>
          </div>
              

          <p className="mb-2 flex items-center justify-center md:justify-start">
            <svg
              className="w-5 h-5 mr-2 text-blue-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Email Icon */}
              <path d="M12 12.713l11.985-7.713c-.001-1.073-.895-1.952-1.992-1.952h-19.986c-1.097 0-1.992.879-1.992 1.952l11.985 7.713zm11.985 2.571l-5.709-3.678-6.276 4.038-6.276-4.038-5.709 3.678v7.716c0 1.073.895 1.952 1.992 1.952h19.986c1.097 0 1.992-.879 1.992-1.952v-7.716z" />
            </svg>
            <a href="mailto:imacab@imacab.ma" className="hover:underline">
            imacab@imacab.ma

            </a>
          </p>  
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            {/* Facebook Icon */}
            <a
              href="https://web.facebook.com/imacabmaroc/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/imacabmaroc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 2a2 2 0 110 4 2 2 0 010-4zm4.5-2c-.828 0-1.5-.672-1.5-1.5S15.672 6 16.5 6s1.5.672 1.5 1.5S17.328 9 16.5 9z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/imacab-maroc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.759 0 5-2.24 5-5v-14c0-2.76-2.241-5-5-5zm-11.75 19h-3.25v-9h3.25v9zm-1.625-10.25c-1.044 0-1.875-.831-1.875-1.875S5.581 5 6.625 5s1.875.831 1.875 1.875-.831 1.875-1.875 1.875zm13.375 10.25h-3.25v-4.5c0-1.085-.91-1.968-2.024-1.968s-2.026.883-2.026 1.968v4.5h-3.25v-9h3.25v1.438h.049c.44-.834 1.516-1.438 2.725-1.438 2.905 0 3.776 1.944 3.776 4.469v4.531z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} IMACAB - All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
