import client from '@/utils/apollo/ApolloClient';
import querySetShippingLocale from '@/utils/queries/shop/shipping/querySetShippingLocale';
import queryShippingCountries from '@/utils/queries/shop/shipping/queryShippingCountries';
import queryShippingStatesByCountry from '@/utils/queries/shop/shipping/queryShippingStatesByCountry';

export async function querySetCustomerShippingAddress(input) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: querySetShippingLocale,
      variables: input,
    });

    queryResult.data = data.updateCustomer;
  } catch (error) {
    if (error) {
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}

export async function getShippingCountries() {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryShippingCountries,
    });

    queryResult.data = data;
  } catch (error) {
    if (error) {
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}

export async function getStatesByCountry(country) {
  if (!country) return;
  const { data } = await client.query({
    query: queryShippingStatesByCountry,
    variables: {
      country: `${country}`,
    },
  });

  return data.countryStates;
}
const ModuleShipping = {
  allowedCountries: getShippingCountries(),
  getStates: function (country) {
    return getStatesByCountry(country);
  },
  setShipping: querySetCustomerShippingAddress,
};

export default ModuleShipping;
