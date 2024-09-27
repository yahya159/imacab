'use client';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function ProductSection() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = async () => {
    try {
      const res = await ProductApis.getLatestProducts();
      setProductList(res.data.data);
    } catch (error) {
      console.error('Error fetching latest products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="font-bold text-[20px] my-3">
        Brand New
        <Link href="/products">
          <span className="font-normal text-[14px] float-right text-primary flex items-center cursor-pointer hover:text-blue-900">
            View All Collection <ArrowRight className="h-4 ml-1" />
          </span>
        </Link>
      </h2>
      <ProductList productList={productList.slice(0, visibleProducts)} isLoading={isLoading} />
      {visibleProducts < productList.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMoreProducts}
            className="px-6 py-3 font-bold text-white rounded-md bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? 'Loading...' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
