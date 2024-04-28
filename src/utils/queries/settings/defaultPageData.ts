import { partialShopMenus } from "../menus/queryShopMenus";
import queryNexPressSettings from "./queryNexPressSettings";
import querySiteSettings from "./querySiteSettings";

const defaultPageData = `
  ${partialShopMenus}
  ${querySiteSettings}
  ${queryNexPressSettings}
`;

export default defaultPageData;