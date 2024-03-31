import { getSessionCartContent } from '@/utils/Process/Cart';
import { useShopContext } from '@/utils/context/ShopProvider';
import ModuleAddToCart from '@/utils/Process/AddToCart';
import { useState } from 'react';
import { v4 } from 'uuid';
import Alert from '../../../Alert';
import ShopPreloader from '../../../ShopPreloader';

const AddToCart = () => {
  const { product, setCart } = useShopContext();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [alertType, setAlertType] = useState(null);
  const [alertNote, setAlertNote] = useState('Product Added Successfully');
  const handleAddToCart = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      //check errors before submitting form
      const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
        quantity: 1,
      };
      const input = {
        input: productQryInput,
      };

      const { data } = await ModuleAddToCart.queryProductAddToCart(input);

      if (data) {
        if (data.cartItem.key) {
          setShowAlert(true);
          setAlertType('success');
          setAlertNote('Product added successfully');
          const { data } = await getSessionCartContent();

          if (data.cart) {
            setCart(data.cart);
          }
          setLoading(false);
        }
      }
    } catch (error) {
      setShowAlert(true);
      setAlertType('error');
      setAlertNote('Failed to add product to cart');
    }
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };
  return (
    <>
      {loading && <ShopPreloader />}
      <div className="sm:flex-col1 mt-10 flex py-5">
        <button
          onClick={handleAddToCart}
          type="submit"
          disabled={loading}
          className="flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to bag
        </button>
        {/* TODO: to be used once my account is setup */}
        {/* <AddToWishlist /> */}
      </div>
      {showAlert && alertType && (
        <Alert
          type={alertType}
          note={alertNote}
          onDismiss={handleAlertDismiss}
        />
      )}
    </>
  );
};

export default AddToCart;
