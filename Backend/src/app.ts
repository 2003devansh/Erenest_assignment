import express from "express";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Task Management API running");
});
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

export default app;
