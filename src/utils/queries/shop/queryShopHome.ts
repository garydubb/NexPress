import { gql } from '@apollo/client';
import { queryProductCategoriesNodes } from './category/queryProductCategories';
import { partialShopMenus } from './menus/queryShopMenus';
import { queryProductsListNodes } from './product/partials/QueryProductFields';

const defaultPageData = `
  ${partialShopMenus}
`;

export const queryShopHome = gql`
  query QueryShopPage {
    ${defaultPageData}
    ${queryProductCategoriesNodes}
    ${queryProductsListNodes}
  }
`;
