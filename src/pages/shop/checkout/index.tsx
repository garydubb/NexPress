import CheckoutPage from '@/components/themes/nexPressShop/Checkout/';
import ModuleCheckout from '@/utils/Process/Checkout';
import { useAppContext } from '@/utils/context/AuthProvider';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

export default function Index(props: any) {
  const { setMenus, setSeo, setSettings, setContent } = useAppContext();
  useEffect(() => {
    const { error, page } = props;

    if (props && page) {
      setMenus(page.menus);
      setSeo(page.seo);
      setSettings(page.settings);
      setContent(page.content);
    }
  }, [props]);
  return <CheckoutPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return await ModuleCheckout.getStaticProps();
};
