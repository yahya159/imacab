'use client';
import React, { useEffect, useState } from 'react';
import ProductList from '../_components/ProductList';
import ProductApis from '../_utils/ProductApis';
import Pagination from '../_components/Pagination'; // We'll create this later

function ProductsPage() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Adjust as needed
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = () => {
    setIsLoading(true);
    ProductApis.getProducts({ page: currentPage, pageSize: productsPerPage })
      .then((res) => {
        setProductList(res.data.data);
        setTotalPages(res.data.meta.pagination.pageCount);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setIsLoading(false);
      });
  };

  return (
    <div className='px-10 md:px-20'>
      <h1 className='font-bold text-2xl my-6'>All Products</h1>
      <ProductList productList={productList} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default ProductsPage;
