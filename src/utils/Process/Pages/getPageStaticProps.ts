import processPageQuery from "./processPageQuery";
import ThemeConstants from "@/utils/static/constants";
import { queryPageBySlug } from "@/utils/queries/pages/queryPageBySlug";

/**
 * Retrieve static props by post type.
 *
 * @author garydubb
 * @param  {string}  params      Page params (e.g., slug).
 * @param  {string}  postType    Post Type Page.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {object}  previewData Post preview data.
 * @return {object}              Object containing post props and revalidate setting.
 */
export default async function getBlogPostsStaticProps(
    params,
    postType,
    preview = false,
    previewData = null
) {
    
    // Set revalidate length (seconds).
    const revalidate = ThemeConstants.revalidate;

    /* -- Fallback: return error if params missing. -- */
    if (!params) {
        return "404" !== postType
            ? { notFound: true }
            : { props: {}, revalidate };
    }

    // Set query variables.
    const slug = Array.isArray(params.slug)
        ? params.slug.join("/")
        : params.slug;

    const idType = "URI";

    const { error, errorMessage, ...postData } = await processPageQuery(
        postType,
        queryPageBySlug,
        { slug, idType },
        preview
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
