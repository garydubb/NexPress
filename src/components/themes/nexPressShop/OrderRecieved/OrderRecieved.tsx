import Container from '@/components/themes/Common/Container';
import NexPressFooter from '@/components/themes/Common/Footer/Footer.component';
import NexPressNavbar from '@/components/themes/Common/Header/NavBar.component';
import { OrderDetails } from './components';

const OrderRecievedPage = () => {
  // Your other page content

  return (
    <div>
      <NexPressNavbar />
      <Container>
        <OrderDetails />
      </Container>
      <NexPressFooter />
    </div>
  );
};

export default OrderRecievedPage;
