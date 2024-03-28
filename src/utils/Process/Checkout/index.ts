import client from '@/utils/apollo/ApolloClient';
import getMenus from '@/utils/functions/common';
import updateShippingMethod from '@/utils/queries/shop/checkout/UpdateShippingMethod';
import queryGetCheckoutPage from '@/utils/queries/shop/checkout/queryGetCheckoutPage';
import queryCeckoutContent from '@/utils/queries/shop/checkout/queryProcessCheckout';
import { queryCustomer } from '@/utils/queries/shop/customer';
import queryPaymentMethods from '@/utils/queries/shop/payments/queryPaymentMethods';
import { v4 as uuidv4 } from 'uuid';

export async function getCheckoutPage() {
  const revalidate = 1 * 1;
  // Set up return object.
  const response = {
    page: null,
    error: false,
    errorMessage: null,
  };

  response.page = await client
    .query({
      query: queryGetCheckoutPage,
    })
    .then((res) => {
      const { menus, customer } = res.data;

      // Retrieve menus.
      return {
        menus: getMenus(menus),
        seo: null,
        content: {
          customer: customer,
        },
        settings: null,
        postType: 'page',
      };
    })
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;

      return null;
    });

  return {
    props: {
      ...response,
    },
    revalidate: revalidate,
  };
}

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

async function checkoutOrderDetails(orderId) {
  const queryResult = {
    error: false,
    error_message: null,
    data: null,
  };

  try {
    const { data } = await client.mutate({
      mutation: queryCustomer,
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

const ModuleCheckout = {
  getStaticProps: async function () {
    return await getCheckoutPage();
  },
  updateShippingMethod: async function (shippingMethod) {
    return await setShippingMethod(shippingMethod);
  },
  getPaymentMethods: async function () {
    return await getPaymentMethods();
  },
  processCheckout: async function (checkoutData) {
    return processOrder(checkoutData);
  },
  getCheckoutOrder: function () {
    const data = localStorage.getItem('orderDetails');

    return JSON.parse(data);
  },
};

export default ModuleCheckout;
