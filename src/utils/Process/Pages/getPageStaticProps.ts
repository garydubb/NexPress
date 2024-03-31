import { queryBlogPostBySlug } from '@/utils/queries/blog/queryBlogPostBySlug';
import processPageQuery from './processPageQuery';
import ThemeConstants from '@/utils/static/constants';

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
export default async function getBlogPostsStaticProps(
  params,
  postType,
  preview = false,
  previewData = null,
) {
  
  // Set revalidate length (seconds).
  const revalidate = ThemeConstants.revalidate;

  /* -- Fallback: return error if params missing. -- */
  if (!params) {
    return '404' !== postType ? { notFound: true } : { props: {}, revalidate };
  }

  //const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

  // Set query variables.
  const id = params.slug;
  
  const idType = 'SLUG';
  const { error, errorMessage, ...postData } = await processPageQuery(
    postType,
    queryBlogPostBySlug,
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
