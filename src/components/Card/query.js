import gql from 'graphql-tag';

export const QUERY_PRODUCT = gql`
  query Product($query: String!) {
    CategoryFind(query: $query) {
      goods {
        _id
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
