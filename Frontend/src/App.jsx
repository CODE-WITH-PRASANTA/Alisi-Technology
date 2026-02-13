import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

/* Layout Components */
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

/* Pages */
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllServices from "./Pages/AllServices/AllServices";
import AiDataAnalytics from "./Pages/AiDataAnalytics/AiDataAnalytics";
import Cloud from "./Pages/Cloud/Cloud";
import Consulting from "./Pages/Consulting/Consulting";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Blog from "./Pages/Blog/Blog";
import EnterpriceSolution from "./Pages/EnterpriceSolution/EnterpriceSolution";
import IOTDigitalEng from "./Pages/IOTDigitalEng/IOTDigitalEng";
import Sustainability from "./Pages/Sustainability/Sustainability";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import BPOService from "./Pages/BPOService/BPOService";
import KPOService from "./Pages/KPOService/KPOService";
import CognitiveOperations from "./Pages/CognitiveOperations/CognitiveOperations";
import NetworkSolution from "./Pages/NetworkSolution/NetworkSolution";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 🔥 Start Loader on Route Change
    setLoading(true);

    // ⏳ Stop Loader After Delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Keep it short for smooth UX

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader loading={loading} />
      <ScrollToTop />
      <Navbar />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/all-services" element={<AllServices />} />
        <Route path="/services/data-analytics" element={<AiDataAnalytics />} />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/details/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services/enterprise-solutions" element={<EnterpriceSolution />} />
        <Route path="/services/iot-digital-engineering" element={<IOTDigitalEng />} />
        <Route path="/services/sustainability" element={<Sustainability />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/services/bpo" element={<BPOService />} />
        <Route path="/services/kpo" element={<KPOService />} />
        <Route path="/services/cognitive-operations" element={<CognitiveOperations />} />
        <Route path="/services/network-solutions" element={<NetworkSolution />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
