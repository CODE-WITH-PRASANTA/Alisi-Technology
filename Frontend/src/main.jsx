import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ ADD THIS
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ SEO Provider */}
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>
);
