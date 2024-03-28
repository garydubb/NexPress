import { useShopContext } from '@/utils/context/ShopProvider';
import { useEffect, useState } from 'react';

const AvailableShippingMethods = ({ setShippingMethod }: any) => {
  const { cart } = useShopContext();
  const [shippingMethods, setShippingMethods] = useState([]);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('');

  useEffect(() => {
    if (cart) {
      const { availableShippingMethods, chosenShippingMethods } = cart;
      if (availableShippingMethods) {
        const availableRates = availableShippingMethods[0];
        if (availableRates?.rates) {
          setShippingMethods(availableRates.rates);
          if (chosenShippingMethods.length > 0) {
            const method = chosenShippingMethods[0].split(':')[0];
            setSelectedShippingMethod(method);
            setShippingMethod(method);
          }
        }
      }
    }
  }, []);

  const handleShippingMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedShippingMethod(event.target.value);
    setShippingMethod(event.target.value);
  };

  if (!cart || !shippingMethods) return null;

  return (
    <div className="sm:col-span-3">
      <div className="mt-4">
        {shippingMethods &&
          shippingMethods.map((method, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                value={method.methodId}
                className="mr-2"
                checked={selectedShippingMethod === method.methodId}
                onChange={handleShippingMethodChange} // Add the onChange event handler
              />
              {method.label}
            </label>
          ))}
      </div>
    </div>
  );
};

export default AvailableShippingMethods;
