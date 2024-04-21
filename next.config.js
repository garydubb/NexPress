if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
    throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables NEXT_PUBLIC_GRAPHQL_URL.
  `);
}

// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     domains: [
//       process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
//       '0.gravatar.com',
//       '1.gravatar.com',
//       '2.gravatar.com',
//       'secure.gravatar.com',
//     ],
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */

    images: {
        domains: [
            "tailwindui.com",
            "localhost",
            "0.gravatar.com",
            "1.gravatar.com",
            "secure.gravatar.com",
            "dev.garydubb.com",
        ],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
