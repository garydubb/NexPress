
const queryPostAuthorFragment = `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
`;


export default queryPostAuthorFragment;