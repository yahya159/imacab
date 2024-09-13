import React from 'react'
import Image from 'next/image'
import { List } from 'lucide-react'
import Link from 'next/link'

function ProductItem({ product }) {
  return (
    <Link href={`/product-details/${product?.id}`} className="block group">
      <div className="overflow-hidden rounded-lg border border-gray-200 hover:border-blue-800 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="banner-card"
          width={300} 
          height={250}  
          className="rounded-t-lg w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="p-3 bg-white">  {/* Reduced padding */}
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-800 transition-colors duration-300">
            {product?.attributes?.title}
          </h2>
          <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">  {/* Reduced font size */}
            <List className="w-3 h-3 text-blue-800" /> {product?.attributes?.category}  {/* Reduced icon size */}
          </p>
          <div className="mt-2 flex items-center justify-between">  {/* Reduced margin */}
            <span className="text-base font-bold text-blue-800">${product?.attributes?.price}</span>  {/* Adjusted font size */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
