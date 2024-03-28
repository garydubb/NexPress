import { queryUpdateItemCart } from '@/utils/Process/Cart';
import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import EmptyCart from '../CartEmpty';
import CartImage from '../CartImage';
import CartItemTitle from '../CartItemTitle';
import CartRemoveItem from '../CartRemoveItem';
import CartUpdateQuantity from '../CartUpdateQuantity';

const CartProductItem = () => {
  const { cart, setCart } = useShopContext();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cart) {
      setProducts(cart.contents?.nodes);
    }
  }, [cart]);
  const updateItemQuantity = async (key, qty) => {
    try {
      const input = {
        input: {
          clientMutationId: v4(),
          keys: [key],
          quantities: [qty],
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
      {products &&
        products.map((item, productIdx) => (
          <li key={productIdx} className="flex py-6 sm:py-10">
            <CartImage product={item.product} />

            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <CartItemTitle product={item.product} />
                  <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">{item.color}</p>
                    {item.size ? (
                      <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                        {item.size}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {item.price}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 sm:pr-9">
                  <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                    Quantity, {item.name}
                  </label>

                  <CartUpdateQuantity item={item} />
                  <div className="absolute top-0 right-0">
                    <CartRemoveItem item={item} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}

      {products.length === 0 && <EmptyCart />}
    </>
  );
};

export default CartProductItem;
