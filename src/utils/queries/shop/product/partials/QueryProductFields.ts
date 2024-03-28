import { nodeFeaturedImage } from './nodeFeaturedImage';
import { nodeGalleryImages } from './nodeGalleryImages';

export const queryProductFields = `
  productId
  averageRating
  catalogVisibility
  commentCount
  commentStatus
  content
  contentTypeName
  databaseId
  date
  dateGmt
  dateOnSaleFrom
  dateOnSaleTo
  description
  desiredSlug
  enclosure
  excerpt
  featured
  featuredImageDatabaseId
  featuredImageId
  guid
  id
  isContentNode
  isPreview
  isRestricted
  isTermNode
  link
  menuOrder
  modified
  modifiedGmt
  name
  onSale
  previewRevisionDatabaseId
  previewRevisionId
  purchasable
  purchaseNote
  reviewCount
  reviewsAllowed
  shortDescription
  sku
  slug
  status
  title
  totalSales
  type
  uri
  ... on SimpleProduct {
    name
    salePrice
    regularPrice
    price
    ${nodeFeaturedImage}
    ${nodeGalleryImages}
  }
`;

export const queryProductsListNode = `
    node {
     ${queryProductFields}
    }
`;

export const queryProductsListNodes = `
products(first: 8) {
  nodes {
    ... on SimpleProduct {
      name
      salePrice
      regularPrice
      price
      slug
      ${nodeFeaturedImage}
    }
  }
}
`;

export const queryProductsListEdges = `
   edges {
     ${queryProductsListNode}
  }
`;

export const queryProductsListProducts = `
   products(first: 12) {
     ${queryProductsListEdges}
  }
`;
