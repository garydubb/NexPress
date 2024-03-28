import Image from '@/components/Atoms/Image';
import { useEffect, useState } from 'react';
import CartRemoveItem from '../../../Cart/components/CartRemoveItem';
import CartUpdateQuantity from '../../../Cart/components/CartUpdateQuantity';

const CheckoutProductCard = ({ item }: any) => {
  const [product, setProduct] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    const { product } = item;

    setProduct(product.node);
    setImage(product.node.image);
  }, [item]);

  if (!product) return null;
  return (
    <>
      <div className="flex-shrink-0">
        {image && (
          <Image
            src={image.sourceUrl}
            alt={image.altText}
            className="w-20 rounded-md"
          />
        )}
      </div>

      <div className="ml-6 flex flex-1 flex-col">
        <div className="flex">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm">
              <a
                href={`/shop/${product.slug}`}
                className="font-medium text-gray-700 hover:text-gray-800"
              >
                {product.name}
              </a>
            </h4>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            <p className="mt-1 text-sm text-gray-500">{product.size}</p>
          </div>

          <div className="ml-4 flow-root flex-shrink-0">
            <CartRemoveItem item={item} />
          </div>
        </div>

        <div className="flex flex-1 items-end justify-between pt-2">
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price}
          </p>

          <div className="ml-4">
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <CartUpdateQuantity item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProductCard;
