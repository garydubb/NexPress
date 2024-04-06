import BlogSinglePage from "@/components/themes/Blog/BlogSinglePage";
import { useAppContext } from "@/utils/context/AuthProvider";
import ModuleBlog from "@/utils/Process/Blog";
import { useEffect } from "react";

export default function BlogPost(props: any) {
    const { setMenus, setSeo, setSettings, setContent } = useAppContext();
    useEffect(() => {
      const { page } = props;
  
      if (props && page) {
        setMenus(page.menus);
        setSeo(page.seo);
        setSettings(page.settings);
        setContent(page.content);
      }
    }, [props]);

    if (!props) return null;
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
