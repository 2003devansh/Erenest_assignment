import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
// app.get("/", (req, res) => {
//   res.send("Task Management API running");
// });
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

export default app;
