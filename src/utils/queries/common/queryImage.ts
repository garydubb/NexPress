export const queryImageVariables = `
  altText
  id
  title
  sourceUrl
`;
const queryImage = `
  image {
      ${queryImageVariables}
  }
`;

export default queryImage;
