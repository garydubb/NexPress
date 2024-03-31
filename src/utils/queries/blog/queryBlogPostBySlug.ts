import { gql } from '@apollo/client';
import queryPostAuthorFragment from './user/queryPostAuthorFragment';
import queryPostFieldsFragment from './partials/queryPostFieldsFragment';
import defaultPageData from '../settings/defaultPageData';

export const queryBlogPostBySlug = gql`

  ${queryPostAuthorFragment}
  ${queryPostFieldsFragment}
  query PostBySlug(
    $id: ID!
    $idType: PostIdType = SLUG
  ) {
    ${defaultPageData}
    post (id: $id, idType: $idType) {
      ...PostFields
      content
    }
   
  }
`;
