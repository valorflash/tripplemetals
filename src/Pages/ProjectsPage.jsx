import Navbar from "../Components/Navbar";
import FooterSection from "../Components/FooterSection"; 
import ProjectsSection from "../Components/ProjectsSection"

// your project imports...

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <ProjectsSection />
      </main>

      <FooterSection />
    </>
  );
}