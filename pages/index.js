import DefaultLayout from '../components/default-layout';
import Welcome from '../components/welcome';
import Meta from '../components/meta';

const Home = () => {
  return (
    <DefaultLayout>
      <Meta
        title="Alex Knipfer - Full Stack Developer from Cincinnati"
        description="Alex Knipfer - Specializes in building web applications using tools such as React, Redux, Angular, GraphQL, MongoDB, and more. When I am not working, you will find me working and contributing to multiple open source projects (GitHub: github.com/alexknipfer) or getting some late night chess games in on Chess.com!"
        url="https://alexknipfer.com"
      />
      <Welcome />
    </DefaultLayout>
  );
};

export default Home;
