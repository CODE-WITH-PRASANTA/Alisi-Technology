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
