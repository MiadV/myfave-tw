import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import TodayPromos from '@/components/TodayPromos';
import DealsOfDay from '@/components/DealsOfDay';
import CategoryHighlights from '@/components/CategoryHighlights';
import InstallAppCard from '@/components/InstallAppCard';
import { Footer, MobileFooter } from '@/components/Footer';
import { CollectionSlider } from '@/components/Collections';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
      <div className="mx-auto max-w-screen-xl space-y-4 pt-6 pb-20">
        <TodayPromos />
        <DealsOfDay />
        <CollectionSlider />
        <CategoryHighlights />
        <InstallAppCard />
      </div>
      <Footer className="hidden sm:flex" />
      <MobileFooter className="sm:hidden" />
    </>
  );
};

export default Home;
