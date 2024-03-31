import Container from '@/components/themes/Common/Container';
import NexPressFooter from '@/components/themes/Common/Footer/Footer.component';
import NexPressNavbar from '../../Common/Header/NavBar.component';
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
