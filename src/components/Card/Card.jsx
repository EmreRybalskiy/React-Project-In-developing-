import React from 'react';

import './card.css';

export const Card = ({ product, link }) => {
  return (
    <div className="card">
      <img src={link + product.images[0].url} alt="product" />
      <div>{product.name}</div>
      <div>{product.descriptions}</div>
      <div>{product.price}</div>
    </div>
  );
};
