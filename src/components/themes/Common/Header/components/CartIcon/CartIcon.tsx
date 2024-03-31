import Link from '@/components/Atoms/Link';
import { useShopContext } from '@/utils/context/ShopProvider';
import StaticLinks from '@/utils/static/links';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

export default function CartIcon() {
  const { cart } = useShopContext();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (cart) {
      const { contents } = cart;
      if (contents) {
        setCount(contents.nodes.length);
      }
    }
  }, [cart]);
  return (
    <>
      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6 group -m-2  items-center p-2">
        <Link href={StaticLinks.cart.href} className="group -m-2 flex items-center p-2">
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {count}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </Link>
      </div>
    </>
  );
}
