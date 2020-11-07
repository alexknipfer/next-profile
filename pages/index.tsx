import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';

import DefaultLayout from '../components/default-layout';
import Meta from '../components/meta';
import { initializeApollo } from '../lib/apolloClient';
import Heading from '../components/heading';

const HOMEPAGE_QUERY = gql`
  query {
    homepage(uid: "homepage", lang: "en-us") {
      profile_image
    }
  }
`;

const Home = () => {
  return (
    <DefaultLayout>
      <Meta
        title="Alex Knipfer - Full Stack Developer from Cincinnati"
        description="Alex Knipfer - Specializes in building web applications using tools such as React, Redux, Angular, GraphQL, MongoDB, and more. When I am not working, you will find me working and contributing to multiple open source projects (GitHub: github.com/alexknipfer) or getting some late night chess games in on Chess.com!"
        url="https://alexknipfer.com"
      />
      <Heading level="h1">Hello, I&apos;m Alex Knipfer</Heading>
      <p className="text-copy-body">
        I&apos;m a developer, chess player, and a disc golfer. I am located in
        Cincinnati and currently work for Ascendum Solutions as a Full Stack
        Engineer.
      </p>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;
