import client from "@/utils/apollo/ApolloClient";
import { postTypes } from "@/utils/config/postTypes";
import { isValidPostType } from "@/utils/functions/common";
import { queryPagePathsSlugs } from "@/utils/queries/pages/queryPagePathsSlugs";

export default async function getBlogPostsStaticPaths(postType) {
    if (!postType || !isValidPostType(postType)) {
        return null;
    }

    // Retrieve post type plural name.
    const pluralName = postTypes[postType].pluralName;

    // Determine path field based on hierarchy.
    const pathField = postType === "page" ? "slug" : "slug";

    // Construct query based on post type.
    const query = queryPagePathsSlugs;

    // Execute query.
    const posts = await client
        .query({ query })
        .then((response) => response?.data?.[pluralName]?.edges ?? [])
        .catch(() => []);

    // Process paths.
    const paths = posts.map((post) => {
        // Trim leading and trailing slashes then split into array on inner slashes.
        const slug =
            post.node[pathField] !== null
                ? post.node[pathField].replace(/^\/|\/$/g, "").split("/")
                : [];

        return {
            params: {
                slug: slug,
            },
        };
    });

    return {
        paths,
        fallback: "blocking",
    };
}
