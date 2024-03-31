import client from '@/utils/apollo/ApolloClient';
import getMenus from '@/utils/functions/common';
/**
 * Retrieve single post.
 *
 * @author Foamite
 * @param  {string}          postType  WP post type.
 * @param  {number | string} id        Post identifier.
 * @param  {object}          query     Post retrieval query.
 * @param  {object}          variables Query variables.
 * @param  {string}          preview   Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                    Object containing Apollo client instance and post data or error object.
 */
export default async function processBlogPostsQuery(
  postType,
  query,
  variables = {},
  preview = null,
) {
  // Set up return object.
  const response = {
    page: null,
    error: false,
    errorMessage: null,
    notFound: false,
  };

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      page: null,
      error: true,
      errorMessage: `Post type \`${postType}\` is not supported.`,
      notFound: true,
    };
  }

  // Execute query.
  response.page = await client
    .query({ query, variables })
    .then((res) => {
      const {menus } = res.data;

      // Retrieve menus.
      const defaultMenus = getMenus(menus);

      // Retrieve default SEO data.
      //const defaultSeo = product?.seo;
      const pageData = {
        menus: defaultMenus,
        seo: null,
        content: null,
        settings: null,
        postType: 'post',
      };
      return pageData;
    })
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;
      return error.message;
    });

  return response;
}
