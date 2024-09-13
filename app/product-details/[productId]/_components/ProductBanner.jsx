import React from 'react'
import Image from 'next/image'

function ProductBanner({ product }) {
  return (
    <div className="relative w-[400px] h-[350px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      {product?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="product-details-banner"
          width={400}
          height={350}
          className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-90"></div>

      <div className="absolute bottom-5 left-5 text-white">
        <h2 className="text-3xl font-bold">Exclusive Product</h2>
        <p className="text-lg">Get it now!</p>
      </div>
    </div>
  );
}

export default ProductBanner;
