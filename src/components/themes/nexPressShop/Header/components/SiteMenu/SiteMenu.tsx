import { Popover } from '@headlessui/react';
import SiteMenuLinks from '../SiteMenuLinks';

export default function SiteMenu() {
  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        <SiteMenuLinks />
      </div>
    </Popover.Group>
  );
}
