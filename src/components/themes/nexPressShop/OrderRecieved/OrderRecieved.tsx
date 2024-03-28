import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import NexPressNavbar from '@/components/themes/nexPressShop/Header/NavBar.component';
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
