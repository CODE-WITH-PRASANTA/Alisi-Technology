import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AllServices from "./Pages/AllServices/AllServices";
<<<<<<< HEAD
import AiDataAnalytics from "./Pages/AiDataAnalytics/AiDataAnalytics"
import Cloud from "./Pages/Cloud/Cloud";
import Consulting from "./Pages/Consulting/Consulting";
=======
import Projects from "./Pages/Projects/Projects";
>>>>>>> 5764ff8e3bcbf31752edd5b36540656ecb0c661e

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/all-services" element={<AllServices />} />
<<<<<<< HEAD
        <Route path="/services/Data-Analytics"element={<AiDataAnalytics />} />
       <Route path="/services/Cloud" element={<Cloud />} />
       <Route path="/services/Consulting" element={<Consulting />} />
=======
        <Route path="/projects" element={<Projects />} />
>>>>>>> 5764ff8e3bcbf31752edd5b36540656ecb0c661e
      </Routes>

      <Footer />
    </>
  );
}

export default App;
