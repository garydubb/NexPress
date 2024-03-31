import client from '@/utils/apollo/ApolloClient';
import getMenus from '@/utils/functions/common';
import queryGetCheckoutPage from '@/utils/queries/shop/checkout/queryGetCheckoutPage';

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