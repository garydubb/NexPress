import { gql } from '@apollo/client';
import queryPostAuthorFragment from './user/queryPostAuthorFragment';
import queryPostFieldsFragment from './partials/queryPostFieldsFragment';
import defaultPageData from '../settings/defaultPageData';

export const queryBlogPostBySlug = gql`
  ${queryPostAuthorFragment}
  ${queryPostFieldsFragment}
  query PostBySlug($slug: ID!) {
    ${defaultPageData}
    post(id: $slug, idType: SLUG) {
      ...PostFields
      content
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;
