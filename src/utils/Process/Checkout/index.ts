import { getCheckoutPage } from './getCheckoutPage';
import { setShippingMethod } from './setShippingMethod';
import { getPaymentMethods } from './getPaymentMethods';
import { processOrder } from './processOrder';

const ModuleCheckout = {
  getStaticProps: async function () {
    return await getCheckoutPage();
  },
  updateShippingMethod: async function (shippingMethod) {
    return await setShippingMethod(shippingMethod);
  },
  getPaymentMethods: async function () {
    return await getPaymentMethods();
  },
  processCheckout: async function (checkoutData) {
    return processOrder(checkoutData);
  },
  getCheckoutOrder: function () {
    const data = localStorage.getItem('orderDetails');

    return JSON.parse(data);
  },
};

export default ModuleCheckout;
