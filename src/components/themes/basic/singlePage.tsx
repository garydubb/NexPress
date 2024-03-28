import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from './components/container';
import Header from './components/header';
import Layout from './components/layout';
import PostBody from './components/post-body';
import PostHeader from './components/post-header';
import PostTitle from './components/post-title';
import SectionSeparator from './components/section-separator';
//import types
import { PageData } from '@/utils/type/pages';

export default function SinglePage({ page, settings }: PageData) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout {...settings}>
      <Container>
        <Header {...settings} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{page.title && page.title}</title>
                <meta
                  property="og:image"
                  content={page.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={page.title}
                coverImage={page.featuredImage}
                date={page.date}
                author={page.author}
                categories=""
              />
              <PostBody content={page.content} />
            </article>

            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  );
}
