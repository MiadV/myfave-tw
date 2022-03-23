import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import { GradientLogo, Logo } from '@/components/Logo';
import Header from '@/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Header />
      <p className='text-xl font-Nunito'>Start Saving Today On The Fave App</p>
      <Logo />
      <GradientLogo />
    </>
  );
};

export default Home;
