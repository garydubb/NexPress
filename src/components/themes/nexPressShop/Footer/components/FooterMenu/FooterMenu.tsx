import Link from '@/components/Atoms/Link';

// Define your menu items in a JSON object
const menuItems = {
  FOOTER_ONE: {
    title: 'Solutions',
    links: [
      { title: 'Marketing', href: '#' },
      { title: 'Analytics', href: '#' },
      { title: 'Commerce', href: '#' },
      { title: 'Insights', href: '#' },
    ],
  },

  FOOTER_TWO: {
    title: 'Support',
    links: [
      { title: 'Pricing', href: '#' },
      // { title: 'Documentation', href: '#' }, // Commented out as per your original code
      { title: 'Guides', href: '#' },
      { title: 'API Status', href: '#' },
    ],
  },

  FOOTER_THREE: {
    title: 'Support',
    links: [
      { title: 'Pricing', href: '#' },
      // { title: 'Documentation', href: '#' }, // Commented out as per your original code
      { title: 'Guides', href: '#' },
      { title: 'API Status', href: '#' },
    ],
  },

  FOOTER_FOUR: {
    title: 'Support',
    links: [
      { title: 'Pricing', href: '#' },
      // { title: 'Documentation', href: '#' }, // Commented out as per your original code
      { title: 'Guides', href: '#' },
      { title: 'API Status', href: '#' },
    ],
  },
};

export default function FooterMenu() {
  return (
    <div className="col-span-2 grid grid-cols-1 gap-4">
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        {menuItems.FOOTER_ONE && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              {menuItems.FOOTER_ONE.title}
            </h3>
            <div className="mt-4 space-y-4">
              {menuItems.FOOTER_ONE.links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {menuItems.FOOTER_TWO && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              {menuItems.FOOTER_TWO.title}
            </h3>
            <div className="mt-4 space-y-4">
              {menuItems.FOOTER_TWO.links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {menuItems.FOOTER_THREE && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              {menuItems.FOOTER_THREE.title}
            </h3>
            <div className="mt-4 space-y-4">
              {menuItems.FOOTER_THREE.links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
        {menuItems.FOOTER_FOUR && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              {menuItems.FOOTER_FOUR.title}
            </h3>
            <div className="mt-4 space-y-4">
              {menuItems.FOOTER_FOUR.links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
