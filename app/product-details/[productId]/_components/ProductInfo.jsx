'use client';
import React, { useContext, useState } from 'react';
import { BadgeCheck, AlertOctagon } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from '../../../_utils/CartApis';
import { CartContext } from '../../../_context/CartContext';

function ProductInfo({ product, isLoading }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // State to hold the selected quantity

  const handleAddToCart = () => {
    if (!user) {
      router.push('/sign-in');
    } else if (!product?.attributes?.stock) {
      console.error('Product is out of stock');
    } else {
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
          quantity,
        },
      };

      // Log the payload to ensure it's correct
      console.log('Payload sent to API:', data);

      CartApis.addToCart(data)
        .then((res) => {
          console.log('Cart added successfully:', res);
          setCart((oldCart) => {
            // Check if product already exists in the cart
            const existingItem = oldCart.find((item) => item.product.id === product.id);
            if (existingItem) {
              // Update the quantity of the existing item
              return oldCart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              );
            } else {
              // Add new item to cart
              return [
                ...oldCart,
                {
                  id: res?.data?.data?.id,
                  product,
                  quantity,
                },
              ];
            }
          });
          // Reset quantity to 1 after adding to cart
          setQuantity(1);
        })
        .catch((err) => {
          console.error('Error while creating cart:', err.response?.data || err);
        });
    }
  };

  // Function to handle quantity change
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg space-y-6 w-full md:w-[400px]">
      {/* Product Title */}
      {isLoading ? (
        <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
      ) : (
        <h2 className="text-2xl font-bold text-gray-900">{product?.attributes?.title}</h2>
      )}

      {/* Product Category */}
      {isLoading ? (
        <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
      ) : (
        <h3 className="text-lg text-gray-500 tracking-wide">{product?.attributes?.category}</h3>
      )}

      {/* Product Description */}
      {isLoading ? (
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      ) : (
        <p className="text-sm text-gray-700 leading-relaxed">
          {product?.attributes?.description?.[0]?.children?.[0]?.text}
        </p>
      )}

      {/* Stock Status with Icon */}
      {isLoading ? (
        <div className="h-5 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
      ) : (
        <div className="flex items-center text-md text-gray-700 gap-2">
          {product?.attributes?.stock ? (
            <BadgeCheck className="w-5 h-5 text-green-500" />
          ) : (
            <AlertOctagon className="w-5 h-5 text-red-500" />
          )}
          <span>
            {product?.attributes?.stock ? 'In Stock' : 'Out of Stock'} - Eligible for Instant Delivery
          </span>
        </div>
      )}

      {/* Price Section */}
      {isLoading ? (
        <div className="h-8 w-1/3 bg-gray-200 rounded-md animate-pulse"></div>
      ) : (
        <div className="text-3xl font-bold text-blue-600">
          ${product?.attributes?.price}
        </div>
      )}

      {/* Quantity Selector and Action Buttons */}
      {isLoading ? (
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
      ) : (
        <>
          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button
              onClick={handleDecreaseQuantity}
              className="px-3 py-1 text-lg font-semibold text-gray-700 bg-gray-200 rounded-l hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center text-lg font-medium border-t border-b border-gray-200"
            />
            <button
              onClick={handleIncreaseQuantity}
              className="px-3 py-1 text-lg font-semibold text-gray-700 bg-gray-200 rounded-r hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className={`w-full md:w-auto px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition duration-300 ${
                product?.attributes?.stock ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
              disabled={!product?.attributes?.stock}
            >
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductInfo;
