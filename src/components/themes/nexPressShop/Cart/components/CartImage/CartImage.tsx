import Image from '@/components/Atoms/Image';
import { useEffect, useState } from 'react';

const CartImage = ({ product }: any) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (product) {
      const { node } = product;
      setImage(node.image);
    }
  }, [product]);
  if (!image) return;
  return (
    <div className="flex-shrink-0">
      <Image
        src={image?.sourceUrl}
        alt={image?.altText}
        title={image?.title}
        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
      />
    </div>
  );
};

export default CartImage;
