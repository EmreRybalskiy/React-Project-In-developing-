import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import './card.css';

export const Card = () => {
  const query = gql`
    query gfa {
      GoodFind(query: "[{}]") {
        images {
          url
        }
        name
        price
        description
      }
    }
  `;

  const link = '//shop-roles.asmer.fs.a-level.com.ua/';

  const { data } = useQuery(query);

  return (
    <div className="card-holder">
      {data &&
        data.GoodFind.filter((product) => product.images)
          .filter((product) => product.name)
          .filter((product) => product.description)
          .filter((product) => product.price)
          .map((product, i) => {
            return (
              <div key={i} className="card">
                <img src={link + product.images[0].url} alt="product" />
                <div>
                  <h4>Name:</h4> {product.name}
                </div>
                <p>Description: {product.description}</p>
                <span>Price : {product.price}</span>
              </div>
            );
          })}
    </div>
  );
};
