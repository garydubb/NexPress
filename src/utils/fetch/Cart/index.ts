import client from '@/utils/apollo/ApolloClient';
import getMenus from '@/utils/functions/common';
import queryGetCartPageConents from '@/utils/queries/shop/cart/queryGetCartContents';

export default async function getCartPage() {
  const revalidate = 1 * 1;
  // Set up return object.
  const response = {
    page: null,
    error: false,
    errorMessage: null,
  };

  response.page = await client
    .query({
      query: queryGetCartPageConents,
    })
    .then((res) => {
      const { menus, cart, customer } = res.data;

      // Retrieve menus.
      return {
        menus: getMenus(menus),
        seo: null,
        content: {
          cart: cart,
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
