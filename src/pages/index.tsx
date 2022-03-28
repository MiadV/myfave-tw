import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import TodayPromos from '@/components/TodayPromos';
import DealsOfDay from '@/components/DealsOfDay';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
      <div className="mx-auto max-w-screen-xl space-y-4 py-6">
        <TodayPromos />
        <DealsOfDay />
      </div>
      <footer className="mt-[500px]">footer</footer>
    </>
  );
};

export default Home;
