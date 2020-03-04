import DefaultLayout from '../components/default-layout';
import Welcome from '../components/welcome';
import Meta from '../components/meta';

const Home = () => {
  return (
    <DefaultLayout>
      <Meta
        title="Alex Knipfer - Full Stack Developer from Cincinnati"
        description="Talented full stack developer from Cincinnati, Ohio"
        url="https://alexknipfer.com"
      />
      <Welcome />
    </DefaultLayout>
  );
};

export default Home;
