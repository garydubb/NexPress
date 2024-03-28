import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';
import CheckoutProductCard from '../CheckoutProductCard';
import OrderCost from '../OrderCost';
import PaymentMethods from '../PaymentMethods';
import CheckoutPlaceOrder from '../PlaceOrder';

const OrderSummary = () => {
  const { cart } = useShopContext();
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    if (cart) {
      const { contents } = cart;

      setProducts(contents.nodes);
    }
  }, [cart]);
  return (
    <div className="mt-10 lg:mt-0">
      <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list" className="divide-y divide-gray-200">
          {products &&
            products.map((product, index) => (
              <li key={index} className="flex py-6 px-4 sm:px-6">
                <CheckoutProductCard item={product} />
              </li>
            ))}
        </ul>
        <OrderCost />
      </div>
      <PaymentMethods />
      <CheckoutPlaceOrder />
    </div>
  );
};

export default OrderSummary;
