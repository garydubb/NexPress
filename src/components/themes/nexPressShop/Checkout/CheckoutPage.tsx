import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import { getSessionCartContent } from '@/utils/Process/Cart';
import { useShopContext } from '@/utils/context/ShopProvider';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import NexPressNavbar from '../Header/NavBar.component';
import ShopPreloader from '../ShopPreloader';
import checkoutSchema from './checkoutSchema';
import { CheckoutForm, OrderSummary } from './components';

const defaultCustomerInfo = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  country: '',
  state: '',
  postcode: '',
  email: '',
  phone: '',
  company: '',
  errors: null,
};

const CheckoutPage = () => {
  const initialState = {
    billing: {
      ...defaultCustomerInfo,
    },
    shipping: {
      ...defaultCustomerInfo,
    },
    createAccount: false,
    customerNote: '',
    billingDifferentThanShipping: false,
    paymentMethod: 'cod',
  };

  const { setCart, setCustomer, cart } = useShopContext();
  const [loading, setLoading] = useState(false);
  const [checkoutFields, setCheckoutFields] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data } = await getSessionCartContent();

      if (data) {
        setCart(data.cart);
        setCustomer(data.customer);
        const { customer } = data;

        if (customer) {
          initialState.billing = {
            ...initialState.billing,
            ...customer.shipping,
          };
          initialState.shipping = {
            ...initialState.shipping,
            ...customer.shipping,
          };
        }

        setCheckoutFields(initialState);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <NexPressNavbar />
      <Container>
        <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
        {loading && <ShopPreloader />}
        {!loading && cart && checkoutFields && (
          <Formik
            initialValues={checkoutFields}
            validationSchema={checkoutSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
            }}
          >
            <form
              onSubmit={handleFormSubmit}
              className="woo-next-checkout-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Checkout Form */}
                <CheckoutForm />

                {/* Order Summary */}
                <div className="col-span-1 md:col-span-1  ">
                  <h3 className="text-lg font-medium capitalize mb-4">
                    Order Summary
                  </h3>
                  <OrderSummary />
                </div>
              </div>
            </form>
          </Formik>
        )}
      </Container>
      <NexPressFooter />
    </div>
  );
};

export default CheckoutPage;
