import React from 'react';
import { BadgeCheck, AlertOctagon } from 'lucide-react';

function ProductInfo({ product }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg space-y-6 w-full md:w-[400px]">
      {/* Product Title */}
      <h2 className="text-2xl font-bold text-gray-900">{product?.attributes?.title}</h2>
      
      {/* Product Category */}
      <h3 className="text-lg text-gray-500 tracking-wide">{product?.attributes?.category}</h3>

      {/* Product Description */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {product?.attributes?.description[0]?.children[0]?.text}
      </p>

      {/* Stock Status with Icon */}
      <div className="flex items-center text-md text-gray-700 gap-2">
        {product?.attributes?.stock ? (
          <BadgeCheck className="w-5 h-5 text-green-500" />
        ) : (
          <AlertOctagon className="w-5 h-5 text-red-500" />
        )}
        <span>{product?.attributes?.stock ? 'In Stock' : 'Out of Stock'} - Eligible for Instant Delivery</span>
      </div>

      {/* Price Section */}
      <div className="text-3xl font-bold text-blue-600">
        ${product?.attributes?.price}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
