import CartPage from '@/components/themes/nexPressShop/Cart';
import { useAppContext } from '@/utils/context/AuthProvider';
import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect } from 'react';

export default function Index(props: any) {
  const { setMenus, setSeo, setSettings, setContent } = useAppContext();
  const { setCart } = useShopContext();
  useEffect(() => {
    const { error, page } = props;

    if (props && page) {
      setMenus(page.menus);
      setSeo(page.seo);
      setSettings(page.settings);
      setContent(page.content);
      setCart(page.content.cart);
    }
  }, [props]);

  return <CartPage />;
}
