import { gql } from '@apollo/client';

// Query: retrieve States/Provinces by Country.
const queryShippingStatesByCountry = gql`
  query GetAllowedCountryStates($country: CountriesEnum!) {
    countryStates(country: $country) {
      name
      code
    }
  }
`;

export default queryShippingStatesByCountry;
