import React, { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import Link from 'next/link';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = (item.quantity || 1) - 1;
            if (newQuantity > 0) {
              return { ...item, quantity: newQuantity };
            } else {
              // Remove item from cart if quantity reaches zero
              return null;
            }
          }
          return item;
        })
        .filter(Boolean) // Remove null values from the array
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
      // Optionally, clear items from the backend if necessary
    }
  };

  // Calculate total quantity for display
  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div
      className="h-[300px] w-[250px]
        bg-gray-100 z-10 rounded-md border shadow-sm
        absolute mx-10 right-10 top-12 p-5 overflow-auto"
    >
      <div className="mt-4 space-y-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                <img
                  src={item?.product?.attributes?.banner?.data?.attributes?.url}
                  alt=""
                  className="object-cover w-16 h-16 rounded"
                />

                <div className="flex-1">
                  <h3 className="text-sm text-gray-900 line-clamp-1">
                    {item?.product?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Category:</dt>
                      <dd className="inline"> {item?.product?.attributes?.category}</dd>
                    </div>

                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">
                        {' '}
                        ${item?.product?.attributes?.price.toFixed(2)}
                      </dd>
                    </div>
                  </dl>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-2 text-sm">{item.quantity || 1}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 space-y-4 text-center">
        <Link
          href="/cart"
          className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
        >
          View my cart ({totalQuantity})
        </Link>

        <Link
          href="/products"
          className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
        >
          Continue shopping
        </Link>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="block w-full px-5 py-2 mt-2 text-sm text-red-600 bg-white border border-red-600 rounded hover:bg-red-50"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
