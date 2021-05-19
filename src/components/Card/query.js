import gql from 'graphql-tag';

export const QUERY_PRODUCT = gql`
  query gfa {
    CategoryFind(query: "[{}]") {
      goods {
        images {
          url
        }
        name
        description
        price
        categories {
          name
        }
      }
    }
  }
`;
