import client from "@/utils/apollo/ApolloClient";
import getMenus from "@/utils/functions/common";
import { querySiteSettings } from "@/utils/queries/shop/querySiteSettings";
import ThemeConstants from "@/utils/static/constants";

/**
 * Retrieves the site settings from the server.
 * @returns {Promise<{ props: { page: { generalSettings: any, nexpress: any } | null, error: boolean, errorMessage: string | null }, revalidate: any }>}
 */
export async function getSiteSettings() {
    const revalidate = ThemeConstants.revalidate;
    // Set up return object.
    const response = {
        data: null,
        error: false,
        errorMessage: null,
    };

    response.data = await client
        .query({
            query: querySiteSettings,
        })
        .then((res) => {
            
            const {  generalSettings, nexpress, menus} = res.data;
            
            // Retrieve menus.
            const defaultMenus = getMenus(menus);
            
            return {
                generalSettings,
                nexpress,
                menus: defaultMenus
            };
        })
        .catch((error) => {
            response.error = true;
            response.errorMessage = error.message;

            return null;
        });

    return response;
}
