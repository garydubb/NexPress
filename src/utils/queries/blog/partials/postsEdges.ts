const queryBlogEdges = `
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
}`;


export default queryBlogEdges;