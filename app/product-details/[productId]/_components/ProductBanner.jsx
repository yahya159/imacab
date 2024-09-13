import React from 'react'
import Image from 'next/image'

function ProductBanner({ product, isLoading }) {
  return (
    <div className="relative w-[400px] h-[350px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {isLoading || !product?.attributes?.banner?.data?.attributes?.url ? (
        // Skeleton loading state
        <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
      ) : (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="product-details-banner"
          width={400}
          height={350}
          className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-90"></div>

      {/* Text overlay */}
      <div className="absolute bottom-5 left-5 text-white">
        {isLoading ? (
          // Placeholder for loading state
          <div className="space-y-2">
            <div className="w-32 h-6 bg-gray-400 rounded animate-pulse"></div>
            <div className="w-24 h-4 bg-gray-400 rounded animate-pulse"></div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold">Exclusive Product</h2>
            <p className="text-lg">Get it now!</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductBanner;
