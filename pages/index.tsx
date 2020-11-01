import { GetStaticProps } from 'next';
import { gql, useQuery } from '@apollo/client';

import DefaultLayout from '../components/default-layout';
import Welcome from '../components/welcome';
import Meta from '../components/meta';
import { initializeApollo } from '../lib/apolloClient';
import { HomePageResponse } from '../interfaces/HomePage';

const HOMEPAGE_QUERY = gql`
  query {
    homepage(uid: "homepage", lang: "en-us") {
      profile_image
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery<HomePageResponse>(HOMEPAGE_QUERY);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <DefaultLayout>
      <Meta
        title="Alex Knipfer - Full Stack Developer from Cincinnati"
        description="Alex Knipfer - Specializes in building web applications using tools such as React, Redux, Angular, GraphQL, MongoDB, and more. When I am not working, you will find me working and contributing to multiple open source projects (GitHub: github.com/alexknipfer) or getting some late night chess games in on Chess.com!"
        url="https://alexknipfer.com"
      />
      <Welcome profileImage={data.homepage.profile_image} />
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
