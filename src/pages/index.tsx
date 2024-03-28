import NexPressTheme from '@/components/themes/basic/basic.theme';
import { GET_SETTINGS } from '@/utils/queries/settings';
import { GetStaticProps } from 'next';

import client from '@/utils/apollo/ApolloClient';
import { Get_ALL_MENUS } from '@/utils/queries/menus';
import { GET_POSTS } from '@/utils/queries/posts';
// import types
import { PageIndex } from '@/utils/type/pages';

export default function Index({ postsResult, settings }: PageIndex) {
  //const allPosts = postsResult.data;

  return <NexPressTheme postsResult={postsResult} settings={settings} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await Promise.all([
    client.query({ query: GET_POSTS }),
    client.query({ query: Get_ALL_MENUS }),
    client.query({ query: GET_SETTINGS }),
  ]);

  const [postsResult, menusResult, settingsResult] = response;

  const set = {
    menus: menusResult.data.menus,
    generalSettings: settingsResult.data.generalSettings,
  };

  const settings = set;
  return {
    props: {
      postsResult,
      settings,
    },
    revalidate: 10,
  };
};
