import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_PAGES_WITH_SLUGS: DocumentNode = gql`
  query PagesQuery {
    pages(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

// Main query using the fragments
export const GET_PAGE_BY_SLUG_QUERY: DocumentNode = gql`
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
  fragment PageFields on Page {
    title
    slug
    date
    content
    author {
      node {
        ...AuthorFields
      }
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
  query Pages($slug: ID!) {
    page(id: $slug, idType: URI) {
      date
      slug
      title
      content
      ...PageFields
    }
  }
`;
