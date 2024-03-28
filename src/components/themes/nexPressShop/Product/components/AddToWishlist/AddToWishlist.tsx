import { HeartIcon } from '@heroicons/react/24/outline';

const AddToCart = () => {
  return (
    <button
      type="button"
      className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
    >
      <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
      <div className="sr-only">Add to favorites</div>
    </button>
  );
};

export default AddToCart;
