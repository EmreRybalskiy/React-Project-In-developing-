import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import "./catalog.css";

export const Catalog = () => {
  const query = gql`
    query gfa {
      GoodFind(query: "[{}]") {
        images {
          url
        }
      }
    }
  `;

  const link = "//shop-roles.asmer.fs.a-level.com.ua/";

  const { data } = useQuery(query);
  console.log(data);
  return (
    <div className="catalog-holder">
      <div>a</div>
      <div>
        {data &&
          data.GoodFind.filter((product) => product.images).map((product) => {
            return <img src={link + product.images[0].url} />;
          })}
      </div>
    </div>
  );
};
