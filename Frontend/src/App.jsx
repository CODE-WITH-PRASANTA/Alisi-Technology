import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllServices from "./Pages/AllServices/AllServices";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Blog from "./Pages/Blog/Blog"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/all-services" element={<AllServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/details" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
