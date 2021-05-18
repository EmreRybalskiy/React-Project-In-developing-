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
    <div className="cards-holder">
      {data &&
        data.GoodFind.filter((product) => product.images)
          .filter((product) => product.name)
          //   .filter((product) => product.description)
          .filter((product) => product.price)
          .map((product, i) => {
            return (
              <div key={i} className="card">
                <div className="card-img">
                  <img src={link + product.images[0].url} alt="product" />
                </div>
                <div>
                  <h4> {product.name}</h4>
                </div>
                <span> Цена: {product.price}</span>
              </div>
            );
          })}
    </div>
  );
};
