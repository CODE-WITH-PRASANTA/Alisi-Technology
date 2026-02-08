import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedLayout from "./Auth/ProtectedLayout"; // ✅ FIXED IMPORT
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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* DEFAULT */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* PUBLIC */}
          <Route path="/login" element={<Login />} />

          {/* 🔐 ALL PROTECTED ROUTES */}
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
           </Route>

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
