'use client';
import React, { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import { useRouter } from 'next/navigation';

function Cart() {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  // Function to calculate total amount based on quantities
  const getTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      const quantity = item.quantity || 1;
      totalAmount += Number(item?.product?.attributes?.price) * quantity;
    });
    return totalAmount.toFixed(2);
  };

  // Function to delete a single cart item
  const deleteCartItemFromList = (id) => {
    CartApis.deleteCartItem(id)
      .then((res) => {
        if (res) {
          setCart((oldCart) => oldCart.filter((item) => item.id !== id));
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  // Function to increase item quantity
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

  // Function to decrease item quantity
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
              deleteCartItemFromList(itemId);
              return null;
            }
          }
          return item;
        })
        .filter(Boolean) // Removes null values (items with quantity zero)
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      // If you need to clear items from the backend
      Promise.all(
        cart.map((item) => CartApis.deleteCartItem(item.id).catch((error) => console.log('error', error)))
      ).then(() => {
        setCart([]);
      });
    }
  };

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            {cart.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-center gap-4">
                      <img
                        src={item?.product?.attributes?.banner?.data?.attributes?.url}
                        alt=""
                        className="object-cover w-16 h-16 rounded"
                      />

                      <div className="flex-1">
                        <h3 className="text-sm text-gray-900">{item?.product?.attributes?.title}</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Category:</dt>
                            <dd className="inline"> {item?.product?.attributes?.category}</dd>
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

                      <div className="flex items-center justify-end gap-2">
                        {/* Display item total (price * quantity) */}
                        $
                        {(Number(item?.product?.attributes?.price) * (item.quantity || 1)).toFixed(2)}

                        <button
                          onClick={() => deleteCartItemFromList(item.id)}
                          className="text-gray-600 transition hover:text-red-600"
                        >
                          <span className="sr-only">Remove item</span>

                          {/* SVG Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Clear Cart Button */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={clearCart}
                    className="px-4 py-2 text-sm text-red-600 bg-white border border-red-600 rounded hover:bg-red-50"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>${getTotalAmount()}</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <button
                        onClick={() => router.push(`/checkout?amount=${getTotalAmount()}`)}
                        className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <h2 className="text-gray-400 text-[12px]">
                  Note: All items will be sent via email.
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
