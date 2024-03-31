import client from '@/utils/apollo/ApolloClient';
import queryUpdateCartItems from '@/utils/queries/shop/cart/queryUpdateItemQuantities';

export default async function queryUpdateItemCart(input) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryUpdateCartItems,
      variables: input,
    });

    queryResult.data = data.removeItemsFromCart;
  } catch (error) {
    if (error) {
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}


