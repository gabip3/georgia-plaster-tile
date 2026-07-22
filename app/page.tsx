import Nav from '@/components/sections/Nav';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import LivingTiles from '@/components/sections/LivingTiles';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Materials from '@/components/sections/Materials';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

import PoolEdge from '@/components/sections/PoolEdge';

import SmoothScroll from '@/components/providers/SmoothScroll';
import WaterCursor from '@/components/ui/WaterCursor';
import RippleCanvas from '@/components/ui/RippleCanvas';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <WaterCursor />
      <RippleCanvas />

      <Nav />
      <main>
        <Hero />
        <Intro />
        <LivingTiles />
        <Services />
        <PoolEdge toColor="abyss" />
        <Portfolio />
        <Materials />
        <PoolEdge flip toColor="abyss" />
        <Process />
        <Testimonials />
        <Faq />
        <PoolEdge toColor="deep" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
