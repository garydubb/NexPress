import { useEffect, useState } from 'react';
import LineItem from '../LineItem';

export default function LineItems({ items }: any) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (items) {
      setProducts(items.nodes);
    }
  }, []);

  if (!products) return null;
  return (
    <>
      <h3 className="sr-only">Items</h3>
      {products.map((product, index) => (
        <div
          key={index}
          className="flex space-x-6 border-b border-gray-200 py-10"
        >
          <LineItem item={product} />
        </div>
      ))}
    </>
  );
}
