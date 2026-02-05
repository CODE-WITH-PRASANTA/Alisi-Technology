import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllServices from "./Pages/AllServices/AllServices";
import AiDataAnalytics from "./Pages/AiDataAnalytics/AiDataAnalytics";
import Cloud from "./Pages/Cloud/Cloud";
import Consulting from "./Pages/Consulting/Consulting";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Blog from "./Pages/Blog/Blog"
import Cybersecurity from "./Pages/Cybersecurity/Cybersecurity";
import EnterpriceSolution from "./Pages/EnterpriceSolution/EnterpriceSolution";
import IOTDigitalEng from "./Pages/IOTDigitalEng/IOTDigitalEng";
import Sustainability from "./Pages/Sustainability/Sustainability";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import BPOService from "./Pages/BPOService/BPOService";
import KPOService from "./Pages/KPOService/KPOService";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
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
        <Route path="/services/Cybersecurity" element={< Cybersecurity />} />
        <Route path="/services/Enterprise-Solutions" element={<EnterpriceSolution />} />
        <Route path="/services/IoT-Digital-Eng." element={<IOTDigitalEng />} />
        <Route path="/services/Sustainability" element={<Sustainability />} />
        <Route path="/blog/details" element={<BlogDetails/>} />
        <Route path="/services/bpo" element={<BPOService />} />
        <Route path="/services/kpo" element={<KPOService />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
