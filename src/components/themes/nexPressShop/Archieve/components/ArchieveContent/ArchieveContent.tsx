import ArchieveMobileFilter from '../ArchieveMobileFilter';
import ArchieveProductList from '../ArchieveProductList';
import ArchieveSidebar from '../ArchieveSidebar';
import ArchieveTopFilter from '../ArchieveTopFilter';

export default function ArchieveContent() {
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <ArchieveMobileFilter />

        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <ArchieveTopFilter />
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <ArchieveSidebar />

            {/* Product grid */}
            <ArchieveProductList />
          </div>
        </section>
      </div>
    </div>
  );
}
