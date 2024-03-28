import queryGetProductBySlug from '@/utils/queries/shop/product/queryGetProductBySlug';
import processProductQuery from './processProductQuery';

/**
 * Retrieve static props by post type.
 *
 * @author Foamite
 * @param  {string}  params      Post params (e.g., slug).
 * @param  {string}  postType    Post Type.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {object}  previewData Post preview data.
 * @return {object}              Object containing post props and revalidate setting.
 */
export default async function getProductTypeStaticProps(
  params,
  postType,
  preview = false,
  previewData = null,
) {
  // Set revalidate length (seconds).
  const revalidate = 1 * 1;

  /* -- Fallback: return error if params missing. -- */
  if (!params) {
    return '404' !== postType ? { notFound: true } : { props: {}, revalidate };
  }

  //const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

  // Set query variables.
  const id = params.slug;

  const idType = 'SLUG';
  const { error, errorMessage, ...postData } = await processProductQuery(
    postType,
    queryGetProductBySlug,
    { id, idType },
    preview,
  );

  const props = {
    ...postData,
    error,
    errorMessage,
  };
  // Merge in query results as Apollo state.
  return {
    props,
    revalidate,
  };
}
