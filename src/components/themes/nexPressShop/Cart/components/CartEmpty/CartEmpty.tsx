import Link from '@/components/Atoms/Link';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        Your cart is empty
      </h2>
      <p className="mb-8 text-gray-600">
        You have no items in your shopping cart.
      </p>
      <Link href="/shop" className={'px-4 py-2 font-semibold text-whit'}>
        Go to Shop
      </Link>
    </div>
  );
};

export default EmptyCart;
