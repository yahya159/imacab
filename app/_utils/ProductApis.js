// Import axiosClient
import axiosClient from './axiosClient';
// If you need axios directly, import it as well
// import axios from 'axios';

const ProductApis = {
  getProducts: ({ page = 1, pageSize = 12 } = {}) => {
    return axiosClient.get('/products', {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        populate: '*', // Include this if you need to populate relationships
      },
    });
  },
  getLatestProducts: () => axiosClient.get('/products?populate=*'),
  getProductById: (id) => axiosClient.get(`/products/${id}?populate=*`),
  getProductsByCategory: (category) =>
    axiosClient.get('/products', {
      params: {
        filters: {
          category: {
            $eq: category,
          },
        },
        populate: '*',
      },
    }),
  getAllProducts: () => axiosClient.get('/products?populate=*'),
};

export default ProductApis;
