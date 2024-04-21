import { useEffect, useState } from 'react';

const CartItemTitle = ({ product }: any) => {
  
  const [title, setTitle] = useState(null);
  const [href, setHref] = useState(null);
  useEffect(() => {
    if (product) {
      const { node } = product;
      setTitle(node.name);
      setHref(`/product/${node.slug}`);
    }
  }, [product]);

  return (
    <div className="flex justify-between">
      <h3 className="text-sm">
        <a
          href={href}
          className="font-medium text-gray-700 hover:text-gray-800"
        >
          {title}
        </a>
      </h3>
    </div>
  );
};

export default CartItemTitle;
