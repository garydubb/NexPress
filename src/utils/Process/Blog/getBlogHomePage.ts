import client from "@/utils/apollo/ApolloClient";
import getMenus from "@/utils/functions/common";
import { queryBlogPosts } from "@/utils/queries/blog/queryBlogPosts";

import { queryShopHome } from "@/utils/queries/shop/queryShopHome";
import ThemeConstants from "@/utils/static/constants";

export default async function getBlogHomePage() {
    const revalidate = ThemeConstants.revalidate;
    // Set up return object.
    const response = {
        page: null,
        error: false,
        errorMessage: null,
    };

    response.page = await client
        .query({
            query: queryBlogPosts,
        })
        .then((res) => {
            const { menus, posts } = res.data;

            // Retrieve menus.
            return {
                menus: getMenus(menus),
                seo: null,
                content: posts.edges,
                settings: null,
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
