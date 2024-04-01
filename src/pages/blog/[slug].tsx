import BlogSinglePage from "@/components/themes/Blog/BlogSinglePage";
import ModuleBlog from "@/utils/Process/Blog";

export default function BlogPost() {
    return <BlogSinglePage />;
}
export async function getStaticPaths() {
    return await ModuleBlog.getBlogPostsStaticPaths("post");
}

/**
 * Get post static props.
 *
 * @author garydubb
 * @param  {object}  context             Context for current post.
 * @param  {object}  context.params      Route parameters for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {object}  context.previewData Post preview data.
 * @return {object}                      Post props.
 */
export async function getStaticProps({ params, preview, previewData }) {
    return await ModuleBlog.getBlogPostsStaticProps(
        params,
        "post",
        preview,
        previewData
    );
}
