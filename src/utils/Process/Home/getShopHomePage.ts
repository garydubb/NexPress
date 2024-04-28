import client from "@/utils/apollo/ApolloClient";
import getMenus from "@/utils/functions/common";

import { queryShopHome } from "@/utils/queries/shop/queryShopHome";
import ThemeConstants from "@/utils/static/constants";

export async function getShopHomePage() {
    const revalidate = ThemeConstants.revalidate;
    // Set up return object.
    const response = {
        page: null,
        error: false,
        errorMessage: null,
    };

    response.page = await client
        .query({
            query: queryShopHome,
        })
        .then((res) => {
            
            const { menus, productCategories, products, generalSettings, nexpress } = res.data;
            const settings ={
                generalSettings,
                nexpress
            }
            // Retrieve menus.
            return {
                menus: getMenus(menus),
                seo: null,
                content: {
                    productCategories: productCategories?.nodes || null,
                    products: products?.nodes || null,
                },
                settings: settings,
                postType: "page",
            };
        })
        .catch((error) => {
            response.error = true;
            response.errorMessage = error.message;

            return null;
        });

    return {
        props: {
            ...response,
        },
        revalidate: revalidate,
    };
}
