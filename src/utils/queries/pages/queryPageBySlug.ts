import { gql } from "@apollo/client";
import defaultPageData from "../settings/defaultPageData";

export const queryPageBySlug = gql`

  query PageBySlug($slug: ID!) {
    ${defaultPageData}
    page(id: $slug, idType: URI) {
      date
      slug
      title
      content
      author {
        node {
          name
          firstName
          lastName
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          
        }
      }
    }
    
    
  }
`;
