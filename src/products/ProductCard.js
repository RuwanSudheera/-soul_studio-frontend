import React from 'react';

const ProductCard = ({ product }) => {
    console.log('product', product);
  return (
    <div className="product-card">
      <div className="product-card-body">
        <span>Tap to view details</span>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="product-card-price">${product.price}</span>
      </div>
      <div className="button-container">
        <button className="rounded-button button-1"> - <span className="button-line">1</span><span className="button-line">Nos</span> + </button>
        <button className="rounded-button button-2"><i className="fas fa-shopping-cart"></i>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;