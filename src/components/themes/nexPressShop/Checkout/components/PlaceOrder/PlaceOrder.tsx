import ModuleCheckout from '@/utils/Process/Checkout';
import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';

import { v4 } from 'uuid';

export const createCheckoutData = (order) => {
  // Set the billing Data to shipping, if applicable.
  const shippingData = order.billingDifferentThanShipping
    ? order.shipping
    : order.billing;

  const checkoutData = {
    clientMutationId: v4(),
    shipping: {
      firstName: shippingData?.firstName,
      lastName: shippingData?.lastName,
      address1: shippingData?.address1,
      address2: shippingData?.address2,
      city: shippingData?.city,
      country: shippingData?.country,
      state: shippingData?.state,
      postcode: shippingData?.postcode,
      email: shippingData?.email,
      phone: shippingData?.phone,
      company: shippingData?.company,
    },
    billing: {
      firstName: order?.billing?.firstName,
      lastName: order?.billing?.lastName,
      address1: order?.billing?.address1,
      address2: order?.billing?.address2,
      city: order?.billing?.city,
      country: order?.billing?.country,
      state: order?.billing?.state,
      postcode: order?.billing?.postcode,
      email: order?.billing?.email,
      phone: order?.billing?.phone,
      company: order?.billing?.company,
    },
    shipToDifferentAddress: order.billingDifferentThanShipping,
    paymentMethod: order.paymentMethod,
    isPaid: false,
    customerNote: order.customerNote,
  };

  // if (order.createAccount) {
  //   checkoutData.account = {
  //     username: order.username,
  //     password: order.password,
  //   };
  // }

  return checkoutData;
};

export default function CheckoutPlaceOrder() {
  const router = useRouter();

  const { setSubmitting, handleSubmit, isSubmitting, values, errors }: any =
    useFormikContext();

  const handleProcessOrder = async () => {
    //check errors before submitting form
    setSubmitting(true);
    if (!values['billingDifferentThanShipping'] && errors['shipping']) {
      console.log('process checkout');
    } else if (errors) {
      return;
    }

    const checkOutData = createCheckoutData(values);

    if (checkOutData) {
      const { data } = await ModuleCheckout.processCheckout(checkOutData);

      if (data) {
        const { orderNumber, orderKey } = data?.checkout?.order || null;
        if (orderNumber && orderKey) {
          // Redirect to Order Recieved page with order ID and key
          localStorage.setItem('orderDetails', JSON.stringify(data));
          router.push(
            {
              pathname: '/shop/checkout/order-received',
              query: { orderKey },
            },
            `/shop/checkout/order-received/?key=${orderKey}`,
          );
        }
      }
    }
  };

  return (
    <>
      <div className="border-t border-gray-200 py-6 ">
        <button
          type="submit"
          onClick={handleProcessOrder}
          className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Confirm order
        </button>
      </div>
    </>
  );
}
