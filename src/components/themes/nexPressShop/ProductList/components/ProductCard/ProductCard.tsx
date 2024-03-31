import Image from '@/components/Atoms/Image';
import Link from '@/components/Atoms/Link';
import { useAppContext } from '@/utils/context/AuthProvider';
import { useEffect, useState } from 'react';
import PageTitle from '../PageTitle';

export default function ProductCard() {
  const { content } = useAppContext();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (content) {
      const { products } = content;
      const filteredProducts =
        products &&
        products.filter((product) => product.__typename === 'SimpleProduct');
      setProducts(filteredProducts);
    }
  }, [content]);
  if (!products) return;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <PageTitle />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product, index) => (
              <Link key={index} href={`product/${product.slug}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.featuredImage.node.sourceUrl}
                    alt={product.featuredImage.node.altText}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
