import Image from '@/components/Atoms/Image';
import Link from '@/components/Atoms/Link';

import StaticLinks from '@/utils/static/links';

export default function SiteLogo() {
  return (
    <div className="ml-4 flex lg:ml-0">
      <Link href={StaticLinks.shop.href} className={''}>
        {/* TODO: Capability to be added from custom plugin */}
        <span className="sr-only">NexPress</span>
        <Image
          className="h-8 w-auto"
          width={1}
          height={1}
          src="/assets/images/logo-nexpress.png"
          alt=""
        />
      </Link>
    </div>
  );
}
