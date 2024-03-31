import Link from '@/components/Atoms/Link';

import StaticLinks from '@/utils/static/links';
export default function SigninOrUp() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <Link
          href={StaticLinks.login.href}
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          {StaticLinks.login.title}
        </Link>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <Link
          href={StaticLinks.register.href}
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          {StaticLinks.register.title}
        </Link>
      </div>
    </>
  );
}
