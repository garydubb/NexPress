import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';

const OrderCost = () => {
  const { cart } = useShopContext();
  const [total, setTotal] = useState<string | null>(null);
  const [subtotal, setSubtotal] = useState<string | null>(null);
  const [totalTaxes, setTotalTaxes] = useState<string | null>(null);
  const [shippingTotal, setShippingTotal] = useState<string | null>(null);
  useEffect(() => {
    if (cart) {
      setTotal(cart.total);
      setSubtotal(cart.subtotal);
      setTotalTaxes(cart.totalTax);
      setShippingTotal(cart.shippingTotal);
    }
  }, [cart]);
  return (
    <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <dt className="text-sm">Subtotal</dt>
        <dd className="text-sm font-medium text-gray-900">{subtotal}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Shipping</dt>
        <dd className="text-sm font-medium text-gray-900">{shippingTotal}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Taxes</dt>
        <dd className="text-sm font-medium text-gray-900">{totalTaxes}</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <dt className="text-base font-medium">Total</dt>
        <dd className="text-base font-medium text-gray-900">{total}</dd>
      </div>
    </dl>
  );
};

export default OrderCost;
