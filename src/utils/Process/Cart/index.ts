import client from '@/utils/apollo/ApolloClient';
import { queryGetCartContents } from '@/utils/queries/shop/cart/queryGetCartContents';
import queryRemoveCartItem from '@/utils/queries/shop/cart/queryRemoveCartItem';
import queryUpdateCartItems from '@/utils/queries/shop/cart/queryUpdateItemQuantities';

export async function getSessionCartContent() {
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

export async function queryRemoveItemCart(input) {
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

export async function queryUpdateItemCart(input) {
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


const ModuleCart = {
  getSessionCartContent: async function () {
    return await getSessionCartContent();
  },
  queryRemoveItemCart: async function (input) {
    return await queryRemoveItemCart(input);
  },
  queryUpdateItemCart: async function (input) {
    return await queryUpdateItemCart(input);
  },
};

export default ModuleCart;