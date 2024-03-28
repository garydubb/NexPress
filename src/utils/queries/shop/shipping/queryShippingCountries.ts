import { gql } from '@apollo/client';

// Query: retrieve Selling to Countries list.
const queryShippingCountries = gql`
  query GetAllowedCountries {
    allowedCountries
  }
`;

export default queryShippingCountries;
