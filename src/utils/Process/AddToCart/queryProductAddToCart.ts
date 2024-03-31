import client from '../../apollo/ApolloClient';
import queryAddToCart from '../../queries/shop/addToCart';

export async function queryProductAddToCart(input) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryAddToCart,
      variables: input,
    });

    queryResult.data = data.addToCart;
  } catch (error) {
    if (error) {
      
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}
