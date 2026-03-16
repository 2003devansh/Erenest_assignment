"use client";

import { Task } from "@/types/task";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TaskCard({ task, onDelete, onToggle }: Props) {
  return (
    <div
      className={`border p-4 rounded flex justify-between items-center transition
        ${task.status ? "bg-green-100 border-green-300" : "bg-white"}
      `}
    >
      <div>
        <h3
          className={`font-bold ${
            task.status ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h3>

        <p
          className={`text-sm ${
            task.status ? "text-gray-400 line-through" : "text-gray-500"
          }`}
        >
          {task.description}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className={`px-3 py-1 rounded text-white ${
            task.status
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {task.status ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
