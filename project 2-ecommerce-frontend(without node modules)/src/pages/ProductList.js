 // src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductCard from '../components/ProductCard';
import { Container, Grid, CircularProgress } from '@mui/material';

const ProductList = ({ setProducts, onProductClick }) => {
  const [products, setLocalProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('AMZ', 'Laptop', 10, 1, 10000); // Example API call
        setProducts(data);
        setLocalProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setProducts]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard product={product} onClick={() => onProductClick(product)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
