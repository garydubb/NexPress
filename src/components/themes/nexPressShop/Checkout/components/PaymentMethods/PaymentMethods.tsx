import ModuleCheckout from '@/utils/Process/Checkout';
import { useShopContext } from '@/utils/context/ShopProvider';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import ShopPreloader from '../../../ShopPreloader';

const PaymentMethods = () => {
  const { cart } = useShopContext();
  const [paymentMethods, setPaymentMethods] = useState<any>([]);
  const { setFieldValue, values } = useFormikContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cart) {
      const fetchData = async () => {
        setLoading(true);
        const { data } = await ModuleCheckout.getPaymentMethods();

        if (data) {
          setPaymentMethods(data.nodes);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [cart]);

  const handlePaymentMethodChange = (method) => {
    setFieldValue('paymentMethod', method);
  };
  return (
    <>
      <div className="mt-6 py-5  grid grid-cols-4 gap-y-6 gap-x-4">
        <div className="col-span-4">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Payment Methods
            </legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Select a payment method
            </p>
            <div className="mt-6 space-y-6">
              {loading && <ShopPreloader />}
              {!loading &&
                paymentMethods &&
                paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      onChange={() => {
                        handlePaymentMethodChange(method.id);
                      }}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {method.title}
                    </label>
                  </div>
                ))}
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
