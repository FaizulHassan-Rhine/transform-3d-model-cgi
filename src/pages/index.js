import Layout from '@/components/layout';
import HomeTopPart from './hometop';
import Pricing from './pricing';
import GetUpdates from './getupdates';

const Home = () => {
  return (
    <div>

      <HomeTopPart />
      <Pricing />
      <GetUpdates />

    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (

    <Layout>{page}</Layout>

  )
}