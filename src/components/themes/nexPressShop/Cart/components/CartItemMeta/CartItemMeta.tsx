import { useEffect, useState } from 'react';

const CartItemTitle = ({ product }: any) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (product) {
      const { node } = product;
      setItems(node.extraData);
    }
  }, [product]);

  return (
    <div className="mt-1 flex text-sm">
      {items &&
        items.map((item, index) => (
          <p key={index} className="text-gray-500">
            {item.value}
          </p>
        ))}
    </div>
  );
};

export default CartItemTitle;
