import Link from '@/components/Atoms/Link';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function SearchForm() {
  return (
    <>
      {/* Search */}
      <div className="flex lg:ml-6">
        <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
