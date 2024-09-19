import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList, isLoading }) {
  // Placeholder skeleton items
  const skeletonArray = new Array(12).fill(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {isLoading
        ? skeletonArray.map((_, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-200 animate-pulse h-64"></div>
          ))
        : productList.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
    </div>
  );
}

export default ProductList;
