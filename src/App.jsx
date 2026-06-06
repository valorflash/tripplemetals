import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;