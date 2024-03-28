import { gql } from '@apollo/client';
import { getCartConents } from './queryGetCartContents';

const queryRemoveCartItem = gql`
  mutation REMOVE_CART_ITEM($input: RemoveItemsFromCartInput!) {
    removeItemsFromCart(input: $input) {
      ${getCartConents}
    }
  }
`;

export default queryRemoveCartItem;
