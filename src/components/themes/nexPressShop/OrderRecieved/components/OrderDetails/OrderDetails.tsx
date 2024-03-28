import ModuleCheckout from '@/utils/Process/Checkout';
import { useEffect, useState } from 'react';
import Address from '../Address';
import LineItems from '../LineItems';

export default function Example() {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const data = ModuleCheckout.getCheckoutOrder();
    if (data) {
      setOrder(data.checkout.order);
    }
  }, []);
  console.log(order);
  if (!order) return null;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-base font-medium text-indigo-600">Thank you!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {'Its on the way!'}
          </p>
          <p className="mt-2 text-base text-gray-500">
            Your order #{order.orderNumber} has been received and please check
            your email for more information.
          </p>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="sr-only">Your order</h2>

          <LineItems items={order.lineItems} />

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <Address label={'Billing Address'} address={order.billing} />

              <Address label={'Shipping Address'} address={order.shipping} />
            </dl>

            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Payment method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>{order.paymentMethodTitle}</p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">{order.subtotal}</dd>
              </div>
              {/* <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Discount
                  <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs text-gray-600">
                    STUDENT50
                  </span>
                </dt>
                <dd className="text-gray-700">-$18.00 (50%)</dd>
              </div> */}
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="text-gray-700">{order.shippingTotal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">{order.total}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
