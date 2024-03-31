import client from '@/utils/apollo/ApolloClient';
import queryCeckoutContent from '@/utils/queries/shop/checkout/queryProcessCheckout';

export async function processOrder(checkoutData) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryCeckoutContent,
      variables: {
        input: checkoutData,
      },
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
