import client from '@/utils/apollo/ApolloClient';
import { postTypes } from '@/utils/config/postTypes';
import {
  isHierarchicalPostType,
  isValidPostType,
} from '@/utils/functions/common';
import { gql } from '@apollo/client';

export default async function getProductsStaticPaths(postType) {
  if (!postType || !isValidPostType(postType)) {
    return null;
  }

  // Retrieve post type plural name.
  const pluralName = postTypes[postType].pluralName;

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType);

  // Determine path field based on hierarchy.
  const pathField = postType === 'product' ? 'slug' : 'slug';

  // Construct query based on post type.
  const query = gql`
      query GET_SLUGS {
        ${pluralName}(first: 10000) {
          edges {
            node {
              ${pathField}
            }
          }
        }
      }
    `;

  // Execute query.
  const posts = await client
    .query({ query })
    .then((response) => response?.data?.[pluralName]?.edges ?? [])
    .catch(() => []);

  // Process paths.
  const paths = posts.map((post) => {
    // Trim leading and trailing slashes then split into array on inner slashes.
    const slug = post.node[pathField].replace(/^\/|\/$/g, '').split('/');

    // Handle year/month/date slug format for posts.
    // if (postType === 'post') {
    //   return {
    //     params: {
    //       // year: slug?.shift() || '', // [0]
    //       // month: slug?.shift() || '', // [1]
    //       // day: slug?.shift() || '', // [2]
    //       slug: slug?.shift() || '', // [3]
    //     },
    //   };
    // }

    return {
      params: {
        slug: slug?.shift(),
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
