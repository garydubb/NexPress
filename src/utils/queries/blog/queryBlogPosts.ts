import { gql } from '@apollo/client';
import queryBlogEdges from './partials/postsEdges';
import defaultPageData from '../settings/defaultPageData';

export const queryBlogPosts = gql`
  query Posts {
    ${defaultPageData}
    posts(where: {}) {
      ${queryBlogEdges}
    }
  }
`;