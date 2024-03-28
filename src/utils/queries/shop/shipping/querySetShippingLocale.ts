import { gql } from '@apollo/client';

const customerContent = `
  id
  sessionToken
  shipping {
    postcode
    state
    city
    country
  }
`;

const querySetShippingLocale = gql`
  mutation SetShippingLocale( $input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      customer {
       ${customerContent}
      }
    }
  }
`;

export default querySetShippingLocale;
