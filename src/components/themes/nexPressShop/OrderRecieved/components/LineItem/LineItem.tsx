import { useEffect, useState } from 'react';
import LineItemImage from './LineItemImage';
export default function LineItem({ item }: any) {
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if (item) {
      setProduct(item.product.node);
    }
  }, []);
  console.log('product', product);
  return (
    <>
      <LineItemImage image={product.featuredImage} />
      <div className="flex flex-auto flex-col">
        <div>
          <h4 className="font-medium text-gray-900">
            <a href={product.uri}>{product.name}</a>
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: product.excerpt }} />
          </p>
        </div>
        <div className="mt-6 flex flex-1 items-end">
          <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
            <div className="flex">
              <dt className="font-medium text-gray-900">Quantity</dt>
              <dd className="ml-2 text-gray-700">{item.quantity}</dd>
            </div>
            <div className="flex pl-4 sm:pl-6">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="ml-2 text-gray-700">$ {item.total}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
