import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../../Card/query.js';

import { Card } from '../../Card/Card.jsx';

import './catalog.css';

const link = '//shop-roles.asmer.fs.a-level.com.ua/';

export const Catalog = ({ selectedProducts, filterPrice, searchProduct }) => {
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    variables: {
      query: JSON.stringify(selectedProducts.length ? [{ $or: selectedProducts }] : [{}]),
    },
  });

  const AllProducts =
    data &&
    data.CategoryFind.reduce((arr, { goods }) => (goods ? [...arr, ...goods] : arr), []).filter(
      (product) => product.price >= filterPrice.min && product.price <= filterPrice.max,
    );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="catalog-holder">
      <div className="cards-holder">
        {AllProducts.map((product, i) => (
          <Card product={product} link={link} key={product._id + i} />
        ))}
      </div>
    </div>
  );
};
