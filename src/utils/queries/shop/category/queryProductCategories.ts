import queryImage from '@/utils/queries/common/queryImage';
import { gql } from '@apollo/client';

export const queryProductCategoryNodeVariables = `
  count
  id
  name
  slug
  taxonomyName
  parentId
  parentDatabaseId
  menuOrder
  link
  description
  ${queryImage}
`;

export const queryProductCategoryNode = `
  node {
    ${queryProductCategoryNodeVariables}
  }
`;

export const queryProductCategoryEdges = `
  edges {
    ${queryProductCategoryNode}
  }
`;

export const queryProductCategoryNodes = `
  nodes {
    ${queryProductCategoryNodeVariables}
  }
`;
export const queryProductCategoriesNodes = `
  
  productCategories(first: 50) {
    ${queryProductCategoryNodes}
  }
  
`;

const queryProductCategories = gql`
  query ProductsCategories {
    productCategories {
      ${queryProductCategoryEdges}
    }
  }
`;

export default queryProductCategories;
