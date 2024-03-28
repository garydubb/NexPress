import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import NexPressNavbar from '../Header/NavBar.component';
import { ProductCard, ShopByCategory } from './components';

const ProductList = () => {
  return (
    <div>
      <NexPressNavbar />
      <Container>
        <ShopByCategory />
        <ProductCard />
      </Container>
      <NexPressFooter />
    </div>
  );
};

export default ProductList;
