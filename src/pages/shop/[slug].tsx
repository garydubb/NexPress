import ProductPage from '@/components/themes/nexPressShop/Product';
import { useAppContext } from '@/utils/context/AuthProvider';
import { useShopContext } from '@/utils/context/ShopProvider';
import getProductsStaticPaths from '@/utils/fetch/Products/getProductsStaicPaths';
import getProductTypeStaticProps from '@/utils/fetch/Products/getProductsStaticProps';
import { useEffect } from 'react';

export default function ShopProductPage({ props }: any) {
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
  return await getProductsStaticPaths('product');
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
  // Replace the empty array with the appropriate function call
  const props = await getProductTypeStaticProps(
    params,
    'product',
    preview,
    previewData,
  );

  return {
    props,
    revalidate: 1 * 1, // Set your desired revalidation time
  };
}
