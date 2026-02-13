const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

/* ================= ROUTES ================= */
const projectRoutes = require("./routes/project.routes");
const testimonialRoutes = require("./routes/testimonial.routes");
const teamRoutes = require("./routes/teamRoutes");
const clientLogoRoutes = require("./routes/clientLogo.routes");
const blogRoutes = require("./routes/blog.routes");
const contactRoutes = require("./routes/contact.routes");
const aiPriceRoutes = require("./routes/AiPrice.routes");
const bpoPriceRoutes = require("./routes/bpoprice.routes")
const kpoRoutes = require("./routes/KpoPrice.routes");
const cloudRoutes = require("./routes/cloudPrice.routes");
const cognitiveRoutes = require("./routes/cognitive.routes");
const consultingRoutes = require("./routes/consulting.routes");
const enterpriseRoutes = require("./routes/enterprise.routes");
const iotRoutes = require("./routes/iot.routes");
const networkRoutes = require("./routes/network.routes");
const sustainabilityRoutes = require("./routes/sustainability.routes");



dotenv.config();
connectDB();

const app = express();

/* ================= GLOBAL MIDDLEWARE ================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:5176",
      "http://localhost:5177",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





/* ================= STATIC FILES ================= */
/* Public access to uploads */
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

/* ================= API ROUTES ================= */
app.use("/api/projects", projectRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/client-logos", clientLogoRoutes);
app.use("/api/blogs",blogRoutes)
app.use("/api/contacts",contactRoutes);
app.use("/api/ai-prices", aiPriceRoutes);
app.use("/api/bpo-prices", bpoPriceRoutes);
app.use("/api/kpo-prices", kpoRoutes);
app.use("/api/cloud-prices", cloudRoutes);
app.use("/api/cognitive-prices", cognitiveRoutes);
app.use("/api/consulting-prices", consultingRoutes);
app.use("/api/enterprise-prices", enterpriseRoutes);
app.use("/api/iot-prices", iotRoutes);
app.use("/api/network-prices", networkRoutes);
app.use("/api/sustainability-prices", sustainabilityRoutes);

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.json({ status: "API is running 🚀" });
});

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ error: err.message });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
