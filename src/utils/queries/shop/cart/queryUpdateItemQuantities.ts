import { gql } from '@apollo/client';
import { getCartConents } from './queryGetCartContents';

const queryUpdateCartItems = gql`
  mutation UPDATE_CART_ITEMs($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input) {
      ${getCartConents}
    }
  }
`;

export default queryUpdateCartItems;
