import { partialShopMenus } from "../menus/queryShopMenus";
import querySiteSettings from "./querySiteSettings";

const defaultPageData = `
  ${partialShopMenus}
  ${querySiteSettings}
`;

export default defaultPageData;