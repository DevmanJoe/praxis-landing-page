import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/LogoMarquee";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Showcase />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}