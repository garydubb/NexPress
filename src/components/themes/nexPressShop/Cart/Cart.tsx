import Container from '@/components/themes/Common/Container';
import NexPressFooter from '@/components/themes/Common/Footer/Footer.component';
import NexPressNavbar from '@/components/themes/Common/Header/NavBar.component';
import { CartContent } from './components';

const CartPage = () => {
  // Your other page content

  return (
    <div>
      <NexPressNavbar />
      <Container>
        <CartContent />
      </Container>
      <NexPressFooter />
    </div>
  );
};

export default CartPage;
