import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div id="load-wrapper">
        <PulseLoader color={"#fe5573"} margin={3} />
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    );
  }
}

export default App;
