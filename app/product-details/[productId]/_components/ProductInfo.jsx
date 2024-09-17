'use client';
import React, { useContext } from 'react';  // Import useContext from React
import { BadgeCheck, AlertOctagon } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from '@/app/_utils/CartApis';
import { CartContext } from '@/app/_context/CartContext';

function ProductInfo({ product, isLoading }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);  // Correctly using useContext

  const handleAddToCart = () => {
    if (!user) {
      router.push('/sign-in');
    } else {
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id]
        }
      };

      // Log the payload to ensure it's correct
      console.log('Payload sent to API:', data);

      CartApis.addToCart(data)
        .then(res => {
          console.log('Cart added successfully:', res);
          setCart(oldCart => [...oldCart, {
            id: res?.data?.data?.id,
            product
          }]);
        })
        .catch(err => {
          console.error('Error while creating cart:', err.response?.data || err);
        });
    }
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

      {/* Action Buttons */}
      {isLoading ? (
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
      ) : (
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
