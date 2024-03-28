import { gql } from '@apollo/client';
import cartCustomer from '../cart/partials/cartCustomer';
import { partialShopMenus } from '../menus/queryShopMenus';

const defaultPageData = `
  ${partialShopMenus}
`;

const queryGetCheckoutPage = gql`
  query GET_CHECKOUT_PAGE_DATA {
    ${cartCustomer}
    
    ${defaultPageData}
  }
`;

export default queryGetCheckoutPage;
