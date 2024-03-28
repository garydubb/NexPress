import { useShopContext } from '@/utils/context/ShopProvider';

export default function ProductPrice() {
  const { product } = useShopContext();
  if (!product) return;
  return (
    <>
      {/* Product Price */}
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
      </div>
    </>
  );
}
