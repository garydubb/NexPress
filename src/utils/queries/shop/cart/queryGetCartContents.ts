import { gql } from '@apollo/client';
import { partialShopMenus } from '../menus/queryShopMenus';
import cartConents from './partials/cartContents';
import cartCustomer from './partials/cartCustomer';

export const getCartConents = `
  cart {
    chosenShippingMethods
    availableShippingMethods {
      packageDetails
      supportsShippingCalculator
      rates {
          cost
          id
          instanceId
          label
          methodId
      }
    }
    needsShippingAddress
    appliedCoupons {
      code
      description
      discountAmount
      discountTax
    }
    ${cartConents}
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
  
`;

const defaultPageData = `
  ${partialShopMenus}
`;

export const queryGetCartContents = gql`
  query GET_CART_DATA {
    ${cartCustomer}
    ${getCartConents}
  }
`;
const queryGetCartPageConents = gql`
  query GET_CART_PAGE_DATA {
    ${cartCustomer}
    ${defaultPageData}
  }
`;

export default queryGetCartPageConents;
