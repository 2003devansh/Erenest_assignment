import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Task Management App",
  description: "Task management system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
