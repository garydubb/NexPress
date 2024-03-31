import { gql } from '@apollo/client';
import { queryProductCategoriesNodes } from './category/queryProductCategories';
import { queryProductsListNodes } from './product/partials/QueryProductFields';
import defaultPageData from '../settings/defaultPageData';



export const queryShopHome = gql`
  query QueryShopPage {
    ${defaultPageData}
    ${queryProductCategoriesNodes}
    ${queryProductsListNodes}
  }
`;
