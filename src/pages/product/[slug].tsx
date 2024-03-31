import ProductPage from "@/components/themes/nexPressShop/Product";
import { useAppContext } from "@/utils/context/AuthProvider";
import { useShopContext } from "@/utils/context/ShopProvider";
import Moduleproduct from "@/utils/Process/Product";
import { useEffect } from "react";

export default function ShopProductPage(props) {
    //const allPosts = postsResult.data;

    const { setMenus, setSeo, setSettings } = useAppContext();
    const { setProduct } = useShopContext();
    useEffect(() => {
        const { error, page } = props;
        if (props && page) {
            setMenus(page.menus);
            setSeo(page.seo);
            setSettings(page.settings);
            setProduct(page.content);
        }
    }, []);
    return <ProductPage />;
}

export async function getStaticPaths() {
    return await Moduleproduct.getProductsStaticPaths("product");
}

/**
 * Get post static props.
 *
 * @author foamite
 * @param  {object}  context             Context for current post.
 * @param  {object}  context.params      Route parameters for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {object}  context.previewData Post preview data.
 * @return {object}                      Post props.
 */
export async function getStaticProps({ params, preview, previewData }) {
    return await Moduleproduct.getProductTypeStaticProps(
        params,
        "product",
        preview,
        previewData
    );
}
