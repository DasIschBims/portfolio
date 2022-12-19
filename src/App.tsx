import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import "./App.css";
import { SocialsPage } from "./pages/SocialsPage";
import { HomePage } from "./pages/HomePage";
import { Send404 } from "./utils/404";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {}, []);

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
        <Route path="*" element={<Send404 />} />
      </Routes>
    );
  }
}

export default App;
