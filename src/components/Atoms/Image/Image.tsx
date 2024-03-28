import Image, { ImageProps } from 'next/image';

const NextImage = ({
  src,
  alt,
  width = 100,
  height = 100,
  ...props
}: ImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
};

export default NextImage;
