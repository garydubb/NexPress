import { getMenuListFromSettings } from '@/utils/services/menu';
import Container from './container';
import MenuList from './menuList';

export default function Footer(settings) {
  const footerMenuList = getMenuListFromSettings(settings, 'FOOTER');
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {settings &&
              settings.generalSettings &&
              settings.generalSettings.description}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {<MenuList items={footerMenuList} />}
          </div>
        </div>
      </Container>
    </footer>
  );
}
