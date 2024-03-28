import Image from '@/components/Atoms/Image';
import Link from '@/components/Atoms/Link';

export default function CurrencySelector() {
  return (
    <>
      <div className="hidden lg:ml-10 lg:flex">
        <Link
          href="#"
          className="flex items-center text-gray-700 hover:text-gray-800"
        >
          <Image
            src="https://tailwindui.com/img/flags/flag-canada.svg"
            alt=""
            className="block h-auto w-5 flex-shrink-0"
          />
          <span className="ml-5 block text-sm font-medium">CAD</span>
          <span className="sr-only">, change currency</span>
        </Link>
      </div>
    </>
  );
}
