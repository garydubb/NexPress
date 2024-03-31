import client from '@/utils/apollo/ApolloClient';
import queryPaymentMethods from '@/utils/queries/shop/payments/queryPaymentMethods';

export async function getPaymentMethods() {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryPaymentMethods,
    });

    queryResult.data = data.paymentGateways;
  } catch (error) {
    if (error) {
      console.log(error?.message);
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}
