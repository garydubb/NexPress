// Query partial: retrieve default data for all frontend pages.
export const partialShopMenus = `
  menus {
    nodes {
      locations
      menuItems(first: 100) {
        nodes {
          id
          parentId
          label
          path
          target
          title
          uri
        }
      }
    }
  }
`;
