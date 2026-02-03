const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/project.routes");

dotenv.config();
connectDB();

const app = express();

/* ✅ CORS – SINGLE, CORRECT CONFIG */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      // "http://localhost:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

<<<<<<< HEAD
app.get("/add",(req,res)=>{
  res.send("My app")
})

// test route
app.get("/", (req, res) => {
  res.send("API running successfully 🚀");
});
=======
app.use(express.json());

/* serve uploaded images */
app.use("/uploads", express.static("uploads"));

/* routes */
app.use("/api/projects", projectRoutes);
>>>>>>> e9e257578a50db9ee16864459b3bab3877dd63ce

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
