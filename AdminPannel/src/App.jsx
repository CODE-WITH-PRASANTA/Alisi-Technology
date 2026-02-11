import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedLayout from "./Auth/ProtectedLayout";
import AddProject from "./Pages/AddProject";
import ViewProjects from "./Pages/ViewProjects";
import AddPrice from "./Pages/AddPrice";
import ViewPrices from "./Pages/ViewPrices";
import TestimonialPage from "./Pages/TestimonialPage/TestimonialPage";
import BlogManagerPage from "./Pages/BlogManagerPage/BlogManagerPage";
import BlogView from "./Pages/BlogView/BlogView";
import TeamManagerPage from "./Pages/TeamMemberPosting/TeamMemberPosting";
import OurProjectComp from "./Pages/OurProjectComp";
import UploadClientLogo from "./Pages/UploadClinetLogo/UploadClinetLogo";
import AiData from "./Pages/AiData";
import BpoService from "./Pages/BpoService";
import KpoService from "./Pages/KpoService";
import CloudComputing from "./Pages/CloudComputing";
import CognitiveOperation from "./Pages/CognitiveOperation";
import Consulting from "./Pages/Consulting";
import EnterpriseSolution from "./Pages/EnterpriseSolution";
import IotDigital from "./Pages/IotDigital";
import NetworkSolution from "./Pages/NetworkSolution";
import SustainabilitySrvices from "./Pages/SustainabilityServices";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* DEFAULT */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* PUBLIC */}
          <Route path="/login" element={<Login />} />

          {/* 🔐 PROTECTED ROUTES */}
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects/add" element={<AddProject />} />
            <Route path="/projects" element={<ViewProjects />} />
            <Route path="/price" element={<ViewPrices />} />
            <Route path="/price/add" element={<AddPrice />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/blog" element={<BlogManagerPage />} />
            <Route path="/blog-view" element={<BlogView />} />
            <Route path="/team" element={<TeamManagerPage />} />
            <Route path="/our-project" element={<OurProjectComp />} />
            <Route path="/client-logos" element={<UploadClientLogo />} />
            <Route path="/services/Data-Analytics" element={<AiData />} />
            <Route path="/services/bpo" element={<BpoService />} />
            <Route path="/services/kpo" element={<KpoService />} />
            <Route path="/services/Cloud" element={<CloudComputing />} />
            <Route path="/services/cognitive-operations" element={<CognitiveOperation />} />
            <Route path="/services/Consulting" element={<Consulting />} />
            <Route path="/services/enterprise-solutions" element={<EnterpriseSolution />} />
            <Route path="/services/iot-digital-engineering" element={<IotDigital />} />
            <Route path="/services/network-solutions" element={<NetworkSolution />} />
            <Route path="/services/sustainability" element={<SustainabilitySrvices />} />
          </Route>

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
