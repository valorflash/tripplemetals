import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
       <Route path="/services" element={<ServicesPage />} />
       <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;