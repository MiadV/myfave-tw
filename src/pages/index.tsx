import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import TodayPromos from '../components/TodayPromos';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
      <div className="mx-auto max-w-screen-lg py-6">
        <TodayPromos />
      </div>
    </>
  );
};

export default Home;
