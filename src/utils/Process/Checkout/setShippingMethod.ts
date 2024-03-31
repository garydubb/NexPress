import client from '@/utils/apollo/ApolloClient';
import updateShippingMethod from '@/utils/queries/shop/checkout/UpdateShippingMethod';
import { v4 as uuidv4 } from 'uuid';

export async function setShippingMethod(shippingMethod) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const input = {
      input: {
        clientMutationId: uuidv4,
        shippingMethods: shippingMethod,
      },
    };
    const { data } = await client.mutate({
      mutation: updateShippingMethod,
      variables: input,
    });

    queryResult.data = data.updateShippingMethod;
  } catch (error) {
    if (error) {
      console.log(error?.message);
      queryResult.error = true;
      queryResult.error_message = error?.message;
    }
  }

  return queryResult;
}