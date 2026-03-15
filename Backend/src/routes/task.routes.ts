import { Router } from "express";
import {
  createTask,
  deleteTask,
  toggleTask,
  getTaskById,
  getTasks,
} from "../controllers/task.controller";

import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// protect all routes
router.use(authMiddleware);

// create task
router.post("/", createTask);

// get all tasks (pagination + filter + search)
router.get("/", getTasks);

// get single task
router.get("/:id", getTaskById);

// delete task
router.delete("/:id", deleteTask);

// toggle task status
router.patch("/:id/toggle", toggleTask);

export default router;
