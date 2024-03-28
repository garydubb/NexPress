import Preloader from '@/components/themes/basic/components/preloader';
import ModuleCheckout from '@/utils/Process/Checkout';
import { useShopContext } from '@/utils/context/ShopProvider';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import BillingForm from '../BillingForm';
import ShippingForm from '../ShippingForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);
  const [deliveryMethods, setDeliveryMethods] = useState([]);
  const { cart, setCart } = useShopContext();
  useEffect(() => {
    if (cart) {
      const { availableShippingMethods, chosenShippingMethods } = cart;
      if (availableShippingMethods.length > 0) {
        const { rates } = availableShippingMethods[0];
        setDeliveryMethods(rates);
      }

      if (chosenShippingMethods.length > 0) {
        const selectedMethod = chosenShippingMethods[0];
        if (selectedMethod) setSelectedDeliveryMethod(selectedMethod);
      }
    }
  }, [cart]);

  const handleDeliveryMethodChange = async (value) => {
    setLoading(true);
    const { data } = await ModuleCheckout.updateShippingMethod(value);

    if (data) {
      setCart(data.cart);
      setSelectedDeliveryMethod(value);
      setLoading(false);
    }
  };
  const handleCheckboxChange = () => {
    setShowShippingForm(!showShippingForm);
  };

  return (
    <div>
      {loading && <Preloader />}
      <BillingForm />
      <div className="space-y-4 mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="same-as-billing"
            className="mr-2"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="same-as-billing" className="text-gray-700">
            Same as Billing Address
          </label>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-10">
          <RadioGroup
            value={selectedDeliveryMethod}
            onChange={setSelectedDeliveryMethod}
          >
            <RadioGroup.Label className="text-lg font-medium text-gray-900">
              Delivery method
            </RadioGroup.Label>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              {deliveryMethods.map((deliveryMethod, index) => (
                <RadioGroup.Option
                  key={index}
                  value={deliveryMethod.id}
                  onClick={() => {
                    handleDeliveryMethodChange(deliveryMethod.id);
                  }}
                  className={({ checked, active }) =>
                    classNames(
                      checked ? 'border-transparent' : 'border-gray-300',
                      active ? 'ring-2 ring-indigo-500' : '',
                      'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                    )
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <span className="flex flex-1">
                        <span className="flex flex-col">
                          <RadioGroup.Label
                            as="span"
                            className="block text-sm font-medium text-gray-900"
                          >
                            {deliveryMethod.label}
                          </RadioGroup.Label>

                          <RadioGroup.Description
                            as="span"
                            className="mt-6 text-sm font-medium text-gray-900"
                          >
                            {deliveryMethod.cost}
                          </RadioGroup.Description>
                        </span>
                      </span>
                      {checked ? (
                        <CheckCircleIcon
                          className="h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span
                        className={classNames(
                          active ? 'border' : 'border-2',
                          checked ? 'border-indigo-500' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-lg',
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        {showShippingForm && (
          <>
            <h3 className="text-lg font-medium capitalize mb-4">
              Shipping Address
            </h3>
            <ShippingForm />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
