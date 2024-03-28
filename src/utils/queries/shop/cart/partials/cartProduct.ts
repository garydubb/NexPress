const cartProduct = `
  product {
    node {
      id
      databaseId
      name
      description
      type
      onSale
      slug
      averageRating
      reviewCount
      image {
        id
        sourceUrl
        srcSet
        altText
        title
      }
    }
  }
`;

export default cartProduct;
