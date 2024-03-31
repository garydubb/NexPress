import client from '@/utils/apollo/ApolloClient';
import queryShippingCountries from '@/utils/queries/shop/shipping/queryShippingCountries';

export default async function getShippingCountries() {
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


