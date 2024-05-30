 // src/App.js
import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleProductClick = (product) => {
    setCurrentProduct(product);
  };

  const handleBackClick = () => {
    setCurrentProduct(null);
  };

  return (
    <Container>
      {currentProduct ? (
        <>
          <Button variant="contained" onClick={handleBackClick} style={{ marginBottom: '20px' }}>
            Back to Products
          </Button>
          <ProductDetail product={currentProduct} />
        </>
      ) : (
        <ProductList setProducts={setProducts} onProductClick={handleProductClick} />
      )}
    </Container>
  );
};

export default App;
