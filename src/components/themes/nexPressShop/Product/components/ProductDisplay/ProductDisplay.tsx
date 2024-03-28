import ProductDescription from '../ProductDescription';
import ProductDetails from '../ProductDetails';
import ProductGallery from '../ProductGallery';

export default function ProductDisplay() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <ProductGallery />

          {/* Product info */}
          <ProductDetails />
        </div>
      </div>
      <ProductDescription />
    </div>
  );
}
