import client from '@/utils/apollo/ApolloClient';
import { queryGetCartContents } from '@/utils/queries/shop/cart/queryGetCartContents';

export default async function getSessionCartContent() {
  const queryResult = {
    error: false,
    error_message: '',
    data: null,
  };
  try {
    const { data } = await client.query({
      query: queryGetCartContents,
    });

    queryResult.data = data;
  } catch (error) {
    queryResult.error = true;
    queryResult.error_message = error.message;
  }
  return queryResult;
}



