// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
  );
};

export default ProductCard;
