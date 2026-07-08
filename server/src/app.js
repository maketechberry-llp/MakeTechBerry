import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import internshipRoutes from "./routes/internship.routes.js";
import projectRoutes from "./routes/project.routes.js";
import reportRoutes from "./routes/report.routes.js";
import messageRoutes from "./routes/message.routes.js";
import workshopRoutes from "./routes/workshop.routes.js";
import authRoutes from "./routes/auth.routes.js";
import {
  createMessage,
  getMessages,
  deleteMessage,
} from "./controllers/message.controller.js";
import protect from "./middlewares/auth.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });
connectDB();
const app = express();

const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:3000", "http://localhost:5173"].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/internships", internshipRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/workshops", workshopRoutes);
// Messages (contact form)
// Note: we mount the router AND also wire explicit handlers to avoid
// any edge-case where the router isn't picked up in runtime.
app.use("/api/messages", messageRoutes);
app.post("/api/messages", createMessage);
app.get("/api/messages", protect, getMessages);
app.delete("/api/messages/:id", protect, deleteMessage);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/auth", authRoutes);

// Debug: Log registered routes
console.log("✅ Message routes registered at /api/messages");


app.get("/", (req, res) => {
  res.send("MakeTechBerry Server Running 🚀");
});

// Serve client build in production when frontend and backend share the same origin
if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(__dirname, "../client/dist");
  app.use(express.static(clientDist));

  app.get("*", (req, res, next) => {
    // Let API and uploads routes pass through
    if (req.originalUrl.startsWith("/api") || req.originalUrl.startsWith("/uploads")) {
      return next();
    }

    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  const message = process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message;

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

export default app;
