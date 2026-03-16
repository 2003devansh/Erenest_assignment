/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function TaskForm({ onAdd }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title) return;

    onAdd({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 flex-1"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={submit} className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </div>
  );
}
