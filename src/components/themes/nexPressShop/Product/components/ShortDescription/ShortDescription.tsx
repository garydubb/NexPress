import { useShopContext } from '@/utils/context/ShopProvider';

export default function ShortDescription() {
  const { product } = useShopContext();
  if (!product) return;
  return (
    <>
      {/* Short Description */}
      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div
          className="space-y-6 text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
        />
      </div>
    </>
  );
}
