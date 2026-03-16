/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { getToken } from "@/utils/auth";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const token = getToken();

  const fetchTasks = async () => {
    const res = await api.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTasks(res.data);
  };

  const addTask = async (data: any) => {
    await api.post("/tasks", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchTasks();
  };

  const toggleTask = async (id: string) => {
    await api.patch(
      `/tasks/${id}/toggle`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    fetchTasks();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>

      <TaskForm onAdd={addTask} />

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  );
}
