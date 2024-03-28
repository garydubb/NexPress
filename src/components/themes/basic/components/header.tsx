import { getMenuListFromSettings } from '@/utils/services/menu';
import Link from 'next/link';
import MenuList from './menuList';

//types
import { SettingsData } from '@/utils/type/settings';

export default function Header(settings: SettingsData) {
  const headerMenuList = getMenuListFromSettings(settings, 'PRIMARY');

  return (
    <>
      <div className="grid grid-cols-3">
        <h2 className="col-span-1 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
          <Link href="/" className="hover:underline">
            NexPress
          </Link>
          .
        </h2>
        <div className="col-span-2 mb-10 mt-8 flex flex-col lg:flex-row justify-center items-center lg:pl-4">
          {<MenuList items={headerMenuList} />}
        </div>
      </div>
    </>
  );
}
