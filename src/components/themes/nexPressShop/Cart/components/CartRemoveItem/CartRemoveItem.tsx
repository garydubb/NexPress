import Preloader from '@/components/Atoms/Preloader/Preloader';
import { queryRemoveItemCart } from '@/utils/Process/Cart';
import { useShopContext } from '@/utils/context/ShopProvider';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { v4 } from 'uuid';

const CartRemoveItem = ({ item }: any) => {
  const { setCart } = useShopContext();
  const [loading, setLoading] = useState(false);
  const removeItem = async (key) => {
    try {
      setLoading(true);
      const input = {
        input: {
          clientMutationId: v4,
          keys: [key],
        },
      };

      const { data } = await queryRemoveItemCart(input);

      setCart(data.cart);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Preloader />}

      <button
        onClick={(event) => {
          event.preventDefault();
          removeItem(item.key);
        }}
        className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Remove</span>
        <TrashIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </>
  );
};

export default CartRemoveItem;
