export function getMenuListFromSettings(settings, location = 'PRIMARY') {
  let menuList = [];
  if (settings && settings.menus?.edges?.length > 0) {
    settings.menus.edges.map((el) => {
      if (el.node.locations.includes(location)) {
        menuList = el.node.menuItems;
      }
    });
  }
  return menuList;
}
