import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import "./App.css";
import { SocialsPage } from "./pages/SocialsPage";
import { HomePage } from "./pages/HomePage";
import { Send404 } from "./utils/404";
import { NotFound404 } from "./pages/404";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        <Route path="/socials" element={<SocialsPage />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Send404 />} />
      </Routes>
    );
  }
}

export default App;
