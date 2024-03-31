import { gql } from "@apollo/client";

export const queryPagePathsSlugs = gql`
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
