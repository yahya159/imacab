import React from 'react';
import Image from 'next/image';
import { List } from 'lucide-react';
import Link from 'next/link';

function ProductItem({ product }) {
  const productImage =
    product?.attributes?.banner?.data?.attributes?.url || '/default-product-image.jpg';
  const productTitle = product?.attributes?.title || 'No title available';
  const productCategory = product?.attributes?.category || 'Uncategorized';
  const productPrice = product?.attributes?.price
    ? `$${product?.attributes?.price.toFixed(2)}`
    : 'Price not available';

  return (
    <Link href={`/product-details/${product?.id}`}>
      <div className="overflow-hidden rounded-lg border border-gray-200 hover:border-blue-800 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="relative h-48 w-full">
          <Image
            src={productImage}
            alt="banner-card"
            layout="fill"
            className="rounded-t-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-3 bg-white">
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-800 transition-colors duration-300">
            {productTitle}
          </h2>
          <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
            <List className="w-3 h-3 text-blue-800" /> {productCategory}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-base font-bold text-blue-800">{productPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
