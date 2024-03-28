import { useShopContext } from '@/utils/context/ShopProvider';

export default function ProductDescription() {
  const { product } = useShopContext();
  if (!product) return;
  return (
    <div className="bg-white">
      <div>
        <div
          className="space-y-6 text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: product.content }}
        />
      </div>
    </div>
  );
}
