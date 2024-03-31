import NexPressTheme from '@/components/themes/basic/basic.theme';
import { GetStaticProps } from 'next';

// import types
import { PageIndex } from '@/utils/type/pages';
import ModuleBlog from '@/utils/Process/Blog';

export default function Index(props: any) {
  //const allPosts = postsResult.data;
  console.log(props);
  return <>Heelo from posts</>;
}

export const getStaticProps: GetStaticProps = async () => {
  return ModuleBlog.getBlogHomePage();
};
