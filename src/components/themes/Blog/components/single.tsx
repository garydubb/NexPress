import { CMS_NAME } from '@/constants/index';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from './container';
import Header from './header';
import Layout from './layout';
import MoreStories from './more-stories';
import PostBody from './post-body';
import PostHeader from './post-header';
import PostTitle from './post-title';
import SectionSeparator from './section-separator';
import Tags from './tags';

//import types
import { PostsData } from '@/utils/type/posts';
import Preloader from '../../../Atoms/Preloader/Preloader';

export default function SinglePage({
  post,
  posts,
  settings,
  loading,
}: PostsData) {
  const router = useRouter();
  const morePosts = posts?.edges;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <>
        <Layout {...settings}>
          <Container>
            <Header {...settings} />
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <Head>
                    <title>{`${post.title} | ${CMS_NAME}`}</title>
                    <meta
                      property="og:image"
                      content={post.featuredImage?.node.sourceUrl}
                    />
                  </Head>
                  <PostHeader />
                  <PostBody/>
                  <footer>
                    {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                  </footer>
                </article>

                <SectionSeparator />
                {morePosts.length > 0 && <MoreStories />}
              </>
            )}
          </Container>
        </Layout>
      </>
    </>
  );
}
