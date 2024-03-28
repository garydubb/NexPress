import Preloader from '@/components/themes/basic/components/preloader';
import { queryUpdateItemCart } from '@/utils/Process/Cart';
import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';

const CartUpdateQuantity = ({ item }: any) => {
  const { cart, setCart } = useShopContext();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(item.quantity); // Add this line

  useEffect(() => {
    if (cart) {
      setProducts(cart.contents?.nodes);
    }
  }, [cart]);

  const updateQuantity = async (key, qty) => {
    try {
      const input = {
        input: {
          items: [{ key: key, quantity: qty }],
        },
      };
      const { data } = await queryUpdateItemCart(input);
      setCart(data.cart);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Preloader />}
      <input
        className="w-10 border text-center"
        type="number"
        name="qty"
        onChange={(event) => {
          setLoading(true);
          setQuantity(parseInt(event.target.value)); // Update the quantity state
          updateQuantity(item.key, parseFloat(event.target.value));
        }}
        value={quantity} // Use the quantity state
      />
    </>
  );
};

export default CartUpdateQuantity;
