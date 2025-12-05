import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import OurServices from '../components/ReusableComponents/OurServices';
import Testimonials from '../components/ReusableComponents/Testimonials';
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <main>
        <OurServices></OurServices>
        <Testimonials></Testimonials>
      </main>

    </div >
  );
};
export default Home;