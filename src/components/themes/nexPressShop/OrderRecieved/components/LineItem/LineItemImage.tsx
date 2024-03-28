import Image from '@/components/Atoms/Image';
import { useEffect, useState } from 'react';

interface LineItemImageProps {
  image: any;
}

export default function LineItemImage({ image }: LineItemImageProps) {
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    if (image) {
      setItem(image.node);
    }
  }, [image]);

  return (
    <>
      <Image
        src={item.sourceUrl}
        alt={item.altText}
        title={item.title}
        className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
      />
    </>
  );
}
