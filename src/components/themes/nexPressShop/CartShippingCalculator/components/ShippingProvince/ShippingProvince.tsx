import ModuleShipping from '@/utils/Process/Shipping';
import { useEffect, useState } from 'react';
import ShopPreloader from '../../../ShopPreloader';

type ShippingProvincesProps = {
  province: string;
  setProvince: (country: string) => void;
  country: string;
};

const ShippingProvince = ({
  province,
  setProvince,
  country,
}: ShippingProvincesProps) => {
  const [loading, setLoading] = useState(true);
  const [provinces, setProvinces] = useState(null);
  const [optionValue, setOptionValue] = useState(null);
  const [prevCountry, setPrevCountry] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        setLoading(true);

        const data = await ModuleShipping.getStates(country);

        if (data) {
          setProvinces(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };
    if (country) {
      fetchStates(); // Call the async function directly
    }
  }, [country]); // Include country in the dependencies array
  return (
    <>
      {loading ? (
        <ShopPreloader />
      ) : (
        <select
          className="block w-full p-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          value={province}
          required
          onChange={(e) => setProvince(e.target.value)}
        >
          <option value="">Select Province/State</option>
          {provinces &&
            provinces.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
        </select>
      )}
    </>
  );
};

export default ShippingProvince;
