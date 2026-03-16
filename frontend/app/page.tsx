import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[350px] text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Task Management System
        </h1>

        <p className="text-gray-500 text-sm">
          Manage your personal tasks efficiently.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/login"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
