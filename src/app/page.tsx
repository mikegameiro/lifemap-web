import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Journey from '@/components/Journey';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import RecoveryRedirect from '@/components/RecoveryRedirect';

export default function Home() {
  return (
    <>
      <RecoveryRedirect />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Journey />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
