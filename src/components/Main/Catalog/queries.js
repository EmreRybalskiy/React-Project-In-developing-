import gql from "graphql-tag";

export const QUERY_IMAGEG = gql`
  query gfa {
    GoodFind(query: "[{}]") {
      images {
        url
      }
    }
  }
`;
