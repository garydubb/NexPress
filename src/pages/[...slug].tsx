import ThemePage from "@/components/themes/ThemePage/ThemePage";
import ModulePage from "@/utils/Process/Pages";

const postType = 'page';

const NPPage = (props): JSX.Element => {
    return <ThemePage />;
};

export default NPPage;


/**
 * Get post static paths.
 *
 * @author garydubb
 * @return {object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {   
    return  await ModulePage.getPageStaticPaths(postType);
}

/**
 * Get Page static props.
 *
 * @author garydubb
 * @param  {object}  context             Context for current Page.
 * @param  {object}  context.params      Route parameters for current Page.
 * @param  {boolean} context.preview     Whether requesting preview of Page.
 * @param  {object}  context.previewData Page preview data.
 * @return {object}                      Page props.
 */
export async function getStaticProps({ params, preview, previewData }) {
    return ModulePage.getPageStaticProps(params, postType, preview, previewData);
}