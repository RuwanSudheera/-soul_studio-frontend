import React from 'react';

const ProductCard = ({ product }) => {
    console.log('product', product);
  return (
    <div className="product-card">
      <span>Tap to view details</span>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="product-card-price">{product.price}</span>
    </div>
  );
};

export default ProductCard;