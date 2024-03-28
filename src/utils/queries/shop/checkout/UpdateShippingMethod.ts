import { gql } from '@apollo/client';
import { getCartConents } from '../cart/queryGetCartContents';

const updateShippingMethod = gql`
  mutation UpdateShippingMethod($input: UpdateShippingMethodInput!) {
    updateShippingMethod(input: $input) {
      clientMutationId
      ${getCartConents}
    }
  }
`;

export default updateShippingMethod;
