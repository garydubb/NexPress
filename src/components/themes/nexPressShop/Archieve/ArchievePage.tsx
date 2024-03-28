import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import NexPressCopyrightBar from '@/components/themes/nexPressShop/Footer/components/Copyright/Copyright';
import NexPressNavbar from '@/components/themes/nexPressShop/Header/NavBar.component';
import { ArchieveContent } from './components';

const ArchievePage = () => {
  return (
    <div>
      <NexPressNavbar />
      <Container>
        <ArchieveContent />
      </Container>
      <NexPressFooter />
      <NexPressCopyrightBar />
    </div>
  );
};

export default ArchievePage;
