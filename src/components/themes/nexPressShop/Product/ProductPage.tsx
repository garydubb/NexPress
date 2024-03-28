import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import NexPressNavbar from '../Header/NavBar.component';
import { ProductDisplay, RelatedProducts } from './components';

const ProductPage = () => {
  // Your other page content

  return (
    <div>
      <NexPressNavbar />
      <Container>
        <ProductDisplay />
        <RelatedProducts />
      </Container>
      <NexPressFooter />
    </div>
  );
};

export default ProductPage;
