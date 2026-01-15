import Navbar from '@/components/Navbar';
// import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Journey from '@/components/Journey';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import RecoveryRedirect from '@/components/RecoveryRedirect';
import JourneyBackground from '@/components/JourneyBackground';

export default function Home() {
  return (
    <>
      <RecoveryRedirect />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <JourneyBackground />
        <Navbar />
        {/* <Banner /> */}
        <main>
          <Hero />
          <Features />
          <Journey />
          <CTA />
        </main>
      </div>
      <Footer />
    </>
  );
}
