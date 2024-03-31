import client from '@/utils/apollo/ApolloClient';
import querySetShippingLocale from '@/utils/queries/shop/shipping/querySetShippingLocale';

export default async function querySetCustomerShippingAddress(input) {
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

