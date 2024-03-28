import { CMS_NAME } from '@/constants/index';
import Head from 'next/head';
import Container from './components/container';
import HeroPost from './components/hero-post';
import Intro from './components/intro';
import Layout from './components/layout';
import MoreStories from './components/more-stories';

//Import Types
import { PageIndex } from '@/utils/type/pages';
import { MorePosts } from '@/utils/type/posts/post';

export default function NexPressTheme({ postsResult, settings }: PageIndex) {
  const { edges } = postsResult.data.posts;
  const heroPost = edges[0]?.node ?? '';
  const morePosts: MorePosts = edges.slice(1);

  const title = settings.generalSettings.title ?? 'NexPress';
  const metaDesc =
    settings.generalSettings.description != ''
      ? settings.generalSettings.description
      : 'This is Website Title';
  return (
    <Layout {...settings}>
      <Head>
        <title>{`${title} | ${metaDesc} | ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro title={title != ' ' ? title : 'NexPress'} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts?.length > 0 && <MoreStories {...morePosts} />}
      </Container>
    </Layout>
  );
}
