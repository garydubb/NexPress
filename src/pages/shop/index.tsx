import ProductList from '@/components/themes/nexPressShop/ProductList';
import { useAppContext } from '@/utils/context/AuthProvider';
import getShopHomePage from '@/utils/fetch/ShopHome';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

export default function Index(props: any) {
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
  return <ProductList />;
}

export const getStaticProps: GetStaticProps = async () => {
  return getShopHomePage();
};
