import { gql } from '@apollo/client';
import { queryEdgesPaths } from './partials/queryEdgesPaths';

export const queryPostsPathsSlugs = gql`
  query Posts {
    posts(first: 10000) {
      ${queryEdgesPaths}
    }
  }
`;