import { GET_SETTINGS } from '@/utils/queries/settings';
import { GetStaticProps } from 'next';

import NexPressThemeRegister from '@/components/themes/basic/register.theme';
import client from '@/utils/apollo/ApolloClient';
import { Get_ALL_MENUS } from '@/utils/queries/menus';

export default function Index({ settings }: any) {
  return <NexPressThemeRegister settings={settings} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await Promise.all([
    client.query({ query: Get_ALL_MENUS }),
    client.query({ query: GET_SETTINGS }),
  ]);

  const [menusResult, settingsResult] = response;

  const set = {
    menus: menusResult.data.menus,
    generalSettings: settingsResult.data.generalSettings,
  };

  const settings = set;
  return {
    props: {
      settings,
    },
    revalidate: 10,
  };
};
