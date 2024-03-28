import { gql } from '@apollo/client';

const queryAddToCart = gql`
  mutation AddToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        product {
          node {
            id
            name
            slug
            type
          }
        }
        key
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }
`;

export default queryAddToCart;
