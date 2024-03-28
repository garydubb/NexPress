import { gql } from '@apollo/client';

export const NodeByUri = gql`
  query NodeByUri {
    products {
      nodes {
        ... on SimpleProduct {
          id
          name
          content
          commentStatus
          commentCount
          backorders
          date
          description
          excerpt
          price
          shortDescription
          sku
          stockQuantity
          status
          title
          type
          width
          weight
          uri
        }
      }
    }
  }
`;
