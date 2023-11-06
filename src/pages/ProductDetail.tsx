import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css'
import { Product } from '../interfaces/Product'

function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);

  const { productId } = useParams<{ productId: string }>();


  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='productDetail'>
      <h1>Product Detail</h1>
      <div className='card'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>

    </div>
  );
}

export default ProductDetail;
