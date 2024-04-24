import Container from '@/components/themes/Common/Container';
import NexPressFooter from '@/components/themes/Common/Footer/Footer.component';
import NexPressNavbar from '../../Common/Header/NavBar.component';
import { ProductCard, ShopByCategory } from './components';

const ProductList = () => {
  return (
    <div>
      {/* <NexPressNavbar /> */}
      <Container>
        <ProductCard />
        {/* <ShopByCategory /> */}
      </Container>
      {/* <NexPressFooter /> */}
    </div>
  );
};

export default ProductList;
