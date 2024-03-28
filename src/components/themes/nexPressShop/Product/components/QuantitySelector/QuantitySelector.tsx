// QuantitySelector.jsx

import { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(4);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
        <div
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          onClick={decreaseQuantity}
        >
          -
        </div>
        <div className="h-8 w-8 text-base flex items-center justify-center">
          {quantity}
        </div>
        <div
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          onClick={increaseQuantity}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
