import Preloader from '@/components/Atoms/Preloader/Preloader';
import { getSessionCartContent } from '@/utils/Process/Cart';
import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';
import CartProductItem from '../CartProductItem';

const ProductsList = () => {
  const { setCart, setCustomer } = useShopContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data } = await getSessionCartContent();

      if (data) {
        setCart(data.cart);
        setCustomer(data.customer);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <section aria-labelledby="cart-heading" className="lg:col-span-7">
        <h2 id="cart-heading" className="sr-only">
          Items in your shopping cart
        </h2>

        <ul
          role="list"
          className="divide-y divide-gray-200 border-t border-b border-gray-200"
        >
          <CartProductItem />
        </ul>
      </section>
    </>
  );
};

export default ProductsList;
