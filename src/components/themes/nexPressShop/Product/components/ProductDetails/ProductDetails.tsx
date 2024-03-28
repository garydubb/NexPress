import { useShopContext } from '@/utils/context/ShopProvider';
import ProductActions from '../ProductActions';
import ProductPrice from '../ProductPrice';
import ProductRating from '../ProductRating';
import ShortDescription from '../ShortDescription';

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-gray-700',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-gray-500',
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
};

const reviews = { href: '#', average: 4, totalCount: 117 };

export default function ProductDetails() {
  //const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  //const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const { product } = useShopContext();
  if (!product) return;
  return (
    <>
      {/* Product info */}
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {product.name}
        </h1>

        {/* Product Price */}
        <ProductPrice />

        {/* Reviews */}
        <ProductRating />

        {/* short description */}
        <ShortDescription />

        {/* Product actions */}
        <ProductActions />
      </div>
    </>
  );
}
