import { gql } from '@apollo/client';

export const getPaymentMethodsNode = `
  paymentGateways {
    nodes {
      description
      icon
      id
      title
    }
  }
  
`;

const queryPaymentMethods = gql`
  query GET_PAYMENT_METHODS {
    ${getPaymentMethodsNode}
  }
`;

export default queryPaymentMethods;
