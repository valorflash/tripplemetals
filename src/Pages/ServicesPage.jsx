import Navbar from "../Components/Navbar";
import FooterSection from "../Components/FooterSection"; 
import ServicesSection from "../Components/ServicesSection"



export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <ServicesSection />
      </main>

      <FooterSection />
    </>
  );
}