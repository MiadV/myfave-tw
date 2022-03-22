import type { NextPage } from 'next';
import SEO from '@/components/SEO';
import { GradientLogo, Logo } from '../components/Logo';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <p className='text-xl font-Nunito'>Start Saving Today On The Fave App</p>
      <Logo />
      <GradientLogo />
    </>
  );
};

export default Home;
