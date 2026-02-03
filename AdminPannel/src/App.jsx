import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedLayout from "./Auth/ProtectedLayout"; // ✅ FIXED IMPORT
import AddProject from "./Pages/AddProject";
import ViewProjects from "./Pages/ViewProjects";
import AddPrice from "./Pages/AddPrice";
import ViewPrices from "./Pages/ViewPrices";
import TestimonialPage from "./Pages/Testimonial/TestimonialPage";

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
          </Route>

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
