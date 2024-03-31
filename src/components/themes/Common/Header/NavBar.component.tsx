import Container from '@/components/themes/Common/Container';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import TopBar from './TopBar.component';
import { CartIcon, SiteLogo, SiteMenu } from './components';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Container>
        <div className="bg-white">
          {/* Mobile menu */}
          <MobileMenu open={open} setOpen={setOpen} />

          <header className="relative bg-white z-50">
            <nav
              aria-label="Top"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                  <button
                    type="button"
                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Logo */}
                  <SiteLogo />
                  {/* Flyout menus */}
                  <SiteMenu />
                  {/* Sign up menus */}
                  <div className="ml-auto flex items-center">
                    {/* <SigninOrUp /> */}

                    {/* Currency Selector  TODO: Future Release */}
                    {/* <CurrencySelector /> */}

                    {/* Search TODO: Future Release */}
                    {/* <SearchForm /> */}

                    {/* Cart */}
                    <CartIcon />
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </Container>
    </>
  );
}
