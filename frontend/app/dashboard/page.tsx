/* eslint-disable react-hooks/set-state-in-effect */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { getToken } from "@/utils/auth";

import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import Navbar from "@/components/Navbar";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: boolean;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();
  const token = getToken();

  // protect route
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
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
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-2xl mx-auto mt-8 p-4">
        <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>

        {/* Add Task */}
        <TaskForm onAdd={addTask} />

        {/* Task List */}
        <div className="space-y-3 mt-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet</p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
