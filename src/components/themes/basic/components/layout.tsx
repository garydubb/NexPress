import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

//types
import { SettingsData } from '@/utils/type/settings';

export default function Layout({
  generalSettings,
  menus,
  children,
}: SettingsData) {
  const settings = {
    generalSettings: generalSettings,
    menus: menus,
  };
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert {...generalSettings} />
        <main>{children}</main>
      </div>
      <Footer {...settings} />
    </>
  );
}
