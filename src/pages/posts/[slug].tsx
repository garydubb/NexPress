import SinglePage from '@/components/themes/basic/components/single';
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

//Page Data Fetch
import client from '@/utils/apollo/ApolloClient';
import { Get_ALL_MENUS } from '@/utils/queries/menus';
import { GET_POSTS_BY_SLUG_QUERY, POST_SLUGS } from '@/utils/queries/blog/blog';
import { GET_SETTINGS } from '@/utils/queries/settings/querySiteSettings';

//Types fetch
import { PostsData } from '@/utils/type/posts';

export default function Post({ post, posts, settings, loading }: PostsData) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <SinglePage
      post={post}
      posts={posts}
      settings={settings}
      loading={loading}
    />
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const response = await Promise.all([
    client.query({
      query: GET_POSTS_BY_SLUG_QUERY,
      variables: { slug },
    }),
    client.query({ query: Get_ALL_MENUS }),
    client.query({ query: GET_SETTINGS }),
  ]);
  const loading = response ? false : true;
  const [postResult, menusResult, settingsResult] = response;

  const set = {
    menus: menusResult.data.menus,
    generalSettings: settingsResult.data.generalSettings,
  };

  return {
    props: {
      post: postResult.data.post,
      posts: postResult.data.posts,
      loading: loading,
      settings: set,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: POST_SLUGS });

  return {
    paths: data?.posts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
