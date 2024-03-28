import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import NexPressNavbar from '@/components/themes/nexPressShop/Header/NavBar.component';
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
