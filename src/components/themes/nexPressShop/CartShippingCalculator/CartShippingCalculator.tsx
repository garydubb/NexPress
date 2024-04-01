/* eslint-disable indent */
import ModuleCart, { getSessionCartContent } from '@/utils/Process/Cart';
import ModuleShipping, {   } from '@/utils/Process/Shipping';
import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Preloader from '../../../Atoms/Preloader/Preloader';
import {
  AvailableShippingMethods,
  ShippingCity,
  ShippingCountries,
  ShippingPostalCode,
  ShippingProvince,
} from './components';

const CartShippingCalculator = () => {
  const [loading, setLoading] = useState(false);
  const { setCart, customer, setCustomer } = useShopContext();
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [shippingMethod, setShippingMethod] = useState(null); // [1

  useEffect(() => {
    if (customer) {
      const { shipping } = customer;
      setCountry(shipping.country);
      setProvince(shipping.state);
      setCity(shipping.city);
      setPostalCode(shipping.postcode);
    }
  }, []);

  const handleSubmit = async () => {
    const input = {
      input: {
        clientMutationId: uuidv4,
        shipping: {
          country: country,
          state: province,
          city: city,
          postcode: postalCode,
        },
      },
    };
    setLoading(true);
    const { data } = await ModuleShipping.setShipping(input);

    setCustomer(data.customer);
    if (data) {
      const { data } = await ModuleCart.getSessionCartContent();
      setCart(data.cart);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shippingMethod == 'flat_rate') {
      setShowInputs(true);
    } else {
      setShowInputs(false);
    }
  }, [shippingMethod]);

  const handleEnterAddress = () => {
    setShowInputs(true); // Show the input fields when "Enter Address" is clicked
  };
  return (
    <>
      {loading && <Preloader />}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="text-sm text-gray-600">
          <span>Shipping estimate</span>
        </dt>
        <dd className="text-sm font-medium text-gray-900">
          <AvailableShippingMethods setShippingMethod={setShippingMethod} />
        </dd>
      </div>
      <div>
        {shippingMethod == 'flat_rate' &&
          loading &&
          showInputs && ( // Render the input fields only when showInputs is true
            <>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <ShippingCountries
                    country={country}
                    setCountry={setCountry}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <ShippingProvince
                    province={province}
                    setProvince={setProvince}
                    country={country}
                  />
                </div>
              </div>
              <ShippingCity city={city} setCity={setCity} />
              <ShippingPostalCode
                postalCode={postalCode}
                setPostalCode={setPostalCode}
              />
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                      onClick={() => setShowInputs(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        {showInputs && ( // Render the "Enter Address" button when showInputs is false
          <div className="text-right">
            <button onClick={handleEnterAddress}>Enter Address</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartShippingCalculator;
