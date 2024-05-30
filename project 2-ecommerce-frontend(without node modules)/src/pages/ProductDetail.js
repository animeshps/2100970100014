 // src/pages/ProductDetail.js
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={`https://via.placeholder.com/150?text=${product.productName}`}
          alt={product.productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {product.company} <br />
            Category: {product.category} <br />
            Price: ${product.price} <br />
            Rating: {product.rating} <br />
            Discount: {product.discount}% <br />
            Availability: {product.availability}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetail;
