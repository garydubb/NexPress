import { gql } from '@apollo/client';

// get items in menu by slug
export const Get_Menu = gql(`
    query GetMenu($id: ID!, $idType: MenuNodeIdTypeEnum!) {
      menu(id: $id, idType: $idType) {
        name
        slug
        id
        databaseId
        menuItems {
          edges {
            node {
              cssClasses
              id
              label
              target
              title
              uri
            }
          }
        }
      }
    }`);

export const Get_ALL_MENUS = gql(`
query Menus {
    menus {
      edges {
        node {
            slug
            name
            menuId
            locations
            isRestricted
            id
            databaseId
            count
            menuItems {
            edges {
              node {
                id
                description
                cssClasses
                label
                order
                title
                target
                uri
              }
            }
          }
        }
      }
    }
}
`);
