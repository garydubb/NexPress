import client from '@/utils/apollo/ApolloClient';
import queryRemoveCartItem from '@/utils/queries/shop/cart/queryRemoveCartItem';


export default async function queryRemoveItemCart(input) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryRemoveCartItem,
      variables: input,
    });

    queryResult.data = data.removeItemsFromCart;
  } catch (error) {
    if (error) {
      console.log(error?.message);
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}


