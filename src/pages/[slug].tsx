import SinglePage from '@/components/themes/basic/singlePage';
import { GetStaticPaths, GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

//import types
import { PageData } from '@/utils/type/pages';

//Page Data Fetch
import client from '@/utils/apollo/ApolloClient';
import { Get_ALL_MENUS } from '@/utils/queries/menus';
import {
  GET_PAGES_WITH_SLUGS,
  GET_PAGE_BY_SLUG_QUERY,
} from '@/utils/queries/pages';
import { GET_SETTINGS } from '@/utils/queries/settings';

export default function Post({ page, settings }: PageData) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return <SinglePage page={page} settings={settings} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const response = await Promise.all([
    client.query({
      query: GET_PAGE_BY_SLUG_QUERY,
      variables: { slug },
    }),
    client.query({ query: Get_ALL_MENUS }),
    client.query({ query: GET_SETTINGS }),
  ]);

  const [pageResult, menusResult, settingsResult] = response;

  const set = {
    menus: menusResult.data.menus,
    generalSettings: settingsResult.data.generalSettings,
  };

  return {
    props: {
      page: pageResult.data.page,
      settings: set,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_PAGES_WITH_SLUGS });
  return {
    paths: data.pages?.edges?.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
};
