'use client';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function ProductSection() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      console.log(res.data.data);
      setProductList(res.data.data);
      setIsLoading(false);
    });
  };

  return (
    <div className='px-10 md:px-20'>
      <h2 className='font-bold text-[20px] my-3'>
        Brand New
        <Link href="/products">
  <span className='font-normal text-[14px] float-right text-primary flex items-center cursor-pointer hover:text-blue-900'>
    View All Collection <ArrowRight className='h-4 ml-1' />
  </span>
</Link>

      </h2>
      <ProductList productList={productList} isLoading={isLoading} />
    </div>
  );
}

export default ProductSection;
