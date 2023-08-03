import Layout from '@/components/layout';
import HomeTopPart from './hometop';
import Pricing from './pricing';
import GetUpdates from './getupdates';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>3D Model & CGI</title>
      </Head>
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