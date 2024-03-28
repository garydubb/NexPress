import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const initialShopContext = null;

// Initialize Menu context object.
export const ShopContext = createContext(initialShopContext);

/**
 * Export useContext Hook.
 *
 * @return {Function} WordPress Context
 */
export function useShopContext() {
  return useContext(ShopContext);
}
type ShopProviderProps = {
  children: React.ReactNode;
  value: any; // Update this with the correct type
};

export default function ShopProvider(props: ShopProviderProps): JSX.Element {
  const { value, children } = props;
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(null);
  const [customer, setCustomer] = useState(null);
  const providerData = {
    product,
    setProduct,
    cart,
    setCart,
    customer,
    setCustomer,
  };
  return (
    <ShopContext.Provider value={providerData}>{children}</ShopContext.Provider>
  );
}

ShopProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any,
};
