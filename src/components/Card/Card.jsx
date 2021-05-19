import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from './query.js';

import './card.css';

const link = '//shop-roles.asmer.fs.a-level.com.ua/';

export const Card = ({setFromInput}) => {
  const [nameProduct, setNameProduct] = useState('Smartphones');
  const { data } = useQuery(QUERY_PRODUCT);

  const AllProducts =
    data && data.CategoryFind.reduce((arr, { goods }) => (goods ? [...arr, ...goods] : arr), []);

  // useEffect(() => {
  //   setState(nameProduct);
  // }, [nameProduct]);

  return (
    <div className="cards-holder">
      {AllProducts.map((product, i) => {
        if (product.categories[0].name === nameProduct)
          return (
            <div key={i} className="card">
              <img src={link + product.images[0].url} alt="product" />
              <div>{product.name}</div>
              <div>{product.descriptions}</div>
              <div>{product.price}</div>
            </div>
          );
      })}
    </div>
  );
};
