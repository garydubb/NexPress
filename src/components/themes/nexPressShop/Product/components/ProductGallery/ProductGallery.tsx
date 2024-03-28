import Image from '@/components/Atoms/Image';
import { useShopContext } from '@/utils/context/ShopProvider';
import { classNames } from '@/utils/functions/common';
import { Tab } from '@headlessui/react';

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
function combineImages(featuredImage, galleryImages) {
  // Initialize the combined images array
  const combinedImages = [];

  // Add the featured image to the combined array
  if (featuredImage && featuredImage.node) {
    combinedImages.push({
      sourceUrl: featuredImage.node.sourceUrl,
      title: featuredImage.node.title,
      altText: featuredImage.node.altText,
    });
  }

  // Add the gallery images to the combined array
  if (galleryImages && galleryImages.nodes && galleryImages.nodes.length > 0) {
    galleryImages.nodes.forEach((image) => {
      combinedImages.push({
        sourceUrl: image.sourceUrl,
        title: image.title,
        altText: image.altText,
      });
    });
  }

  // Return the combined images array
  return combinedImages;
}
export default function ProductGallery() {
  const { product } = useShopContext();
  const gallery = combineImages(product?.featuredImage, product?.galleryImages);

  if (!product) return;
  return (
    <>
      {/* Image gallery */}
      <Tab.Group as="div" className="flex flex-col-reverse">
        {/* Image selector */}
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-4 gap-6">
            {gallery &&
              gallery.map((image, index) => (
                <Tab
                  key={index}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only"> {image.name} </span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <Image
                          src={image.sourceUrl}
                          alt={image.altText}
                          title={image.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        className={classNames(
                          selected ? 'ring-indigo-500' : 'ring-transparent',
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
          </Tab.List>
        </div>

        <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
          {gallery &&
            gallery.map((image, idx) => (
              <Tab.Panel key={idx}>
                <Image
                  src={image.sourceUrl}
                  alt={image.altText}
                  title={image.title}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
