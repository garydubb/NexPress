import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts {
    posts(where: {}) {
      edges {
        node {
          date
          slug
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
              title
              srcSet
            }
          }
          tags(first: 3) {
            nodes {
              name
              id
              slug
              description
            }
          }
          isSticky
          author {
            node {
              firstName
              lastName
              avatar {
                url
                foundAvatar
              }
            }
          }
        }
      }
    }
  }
`;

export const POST_SLUGS = gql`
  query Posts {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GET_POSTS_BY_SLUG_QUERY = gql`
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
  }
  query PostBySlug($slug: ID!) {
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
