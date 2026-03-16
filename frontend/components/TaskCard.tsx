"use client";

import { Task } from "@/types/task";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TaskCard({ task, onDelete, onToggle }: Props) {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          {task.status ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
