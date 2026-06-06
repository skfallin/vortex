import { BottomNav } from './components/BottomNav';
import { CopyrightBar } from './components/CopyrightBar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { PartnerSection } from './components/PartnerSection';
import { PricingSection } from './components/PricingSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { TestimonialSection } from './components/TestimonialSection';

export default function App() {
  return (
    <main id="top" className="min-h-screen bg-white pb-28 text-[#051A24]">
      <Hero />
      <Marquee />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </main>
  );
}
