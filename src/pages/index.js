import React from 'react';
import Navbar2 from '../components/navbar/navbar';
import HomeTopPart from './homeTop/hometop';
import Pricing from './pricing/pricing';
import GetUpdates from './getUpdates/getupdates';
import Footer from '../components/footer/footer';
import Layout from '@/components/layout';

const Home = () => {
  return (
    <div>

      <HomeTopPart></HomeTopPart>
      <Pricing></Pricing>
      <GetUpdates></GetUpdates>

    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (

    <Layout>{page}</Layout>

  )
}