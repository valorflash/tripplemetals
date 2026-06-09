import Navbar from "../Components/Navbar";
import FooterSection from "../Components/FooterSection"; 
import ContactSection from "../Components/ContactSection"

// your project imports...

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}