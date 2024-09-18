'use client';
import Cart from './Cart';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCartIcon } from 'lucide-react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';

function Header() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);  // Define the state for cart toggle

  // Update isLoggedIn based on user state
  useEffect(() => {
    setIsLoggedIn(!!user); // Check if user exists
    if (user) {
      getCartItems();
    }
  }, [user]);

  // Fetch cart items when user is available
  const getCartItems = () => {
    CartApis.getUserCartItems(user?.primaryEmailAddress?.emailAddress).then((res) => {
      console.log('Response from cart items', res?.data?.data);
      res?.data?.data.forEach((citem) => {
        setCart((oldCart) => [
          ...oldCart,
          {
            id: citem.id,
            product: citem?.attributes?.products?.data[0],
          },
        ]);
      });
    });
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a  style={{ color: '#372b86' }} className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a style={{ color: '#372b86' }} className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a style={{ color: '#372b86' }} className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a style={{ color: '#372b86' }} className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a style={{ color: '#372b86' }} className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 shadow hover:bg-blue-100"
                  href="/sign-in"
                >
                  Login
                </a>
                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <h2 className="flex gap-1 text-semibold">({cart?.length})</h2>
                <ShoppingCartIcon style={{ color: '#372b86' }}
                  className="h-6 w-6 text-gray-500 cursor-pointer"
                  onClick={() => setOpenCart(!openCart)}  // Toggle cart view
                />
                <UserButton afterSignOutUrl="/" />
                {openCart && <Cart />}  {/* Show cart when openCart is true */}
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav aria-label="Mobile Menu" className="md:hidden">
            <ul className="flex flex-col items-center gap-4 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
