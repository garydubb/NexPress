import Container from '@/components/themes/Common/Container';
import NexPressFooter from '@/components/themes/Common/Footer/Footer.component';
import NexPressCopyrightBar from '@/components/themes/Common/Footer/components/Copyright/Copyright';
import NexPressNavbar from '@/components/themes/Common/Header/NavBar.component';
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
