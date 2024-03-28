import { gql } from '@apollo/client';
import { partialShopMenus } from '../menus/queryShopMenus';
import { queryProductFields } from './partials/QueryProductFields';

// Query partial: retrieve default data for all frontend pages.
export const defaultPageData = `
  ${partialShopMenus}
`;

const queryGetProductBySlug = gql`
  query queryProductBySlug(
    $id: ID!
    $idType: ProductIdTypeEnum = SLUG
  ) {
    ${defaultPageData}

    product(id: $id, idType: $idType) {
      ${queryProductFields}
     
    }
  }
`;

export default queryGetProductBySlug;
