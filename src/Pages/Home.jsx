import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import WhyChooseUs from '../Components/WhyChooseUs';
// import ProjectsSection from '../Components/ProjectsSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import FAQSection from '../Components/FAQSection';
import ContactSection from '../Components/ContactSection';
import FooterSection from '../Components/FooterSection';
import FloatingCTA from '../Components/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <FloatingCTA />
    </div>
  );
}
