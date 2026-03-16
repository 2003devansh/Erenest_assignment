# Task Management System

A full-stack Task Management application that allows users to register, authenticate, and manage their personal tasks.
The project includes a **Node.js + Express + Prisma backend API** and a **Next.js (App Router) + TypeScript + Tailwind CSS frontend**.

---

# Overview

This application enables users to:

- Create an account
- Log in securely
- Create, view, update, and delete tasks
- Toggle task completion status
- Search tasks by title
- Filter tasks by completion status
- Load tasks using pagination

Each task belongs to the logged-in user, ensuring that users can only access their own tasks.

---

# Tech Stack

## Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt for password hashing

## Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Axios for API communication
- React Hooks

---

# Backend Setup

Navigate to the backend directory:

```
cd backend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=4000
DATABASE_URL=postgresql://user:password@localhost:5432/tasks
ACCESS_SECRET=your_access_secret
REFRESH_SECRET=your_refresh_secret
```

Generate Prisma client:

```
npx prisma generate
```

Push schema to the database:

```
npx prisma db push
```

Run the development server:

```
npm run dev
```

Backend runs at:

```
http://localhost:4000
```

---

# Frontend Setup

Navigate to the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

# API Routes

## Authentication

### Register

```
POST /auth/register
```

Request body:

```
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### Login

```
POST /auth/login
```

Response:

```
{
  "accessToken": "jwt_token",
  "refreshToken": "refresh_token"
}
```

---

### Refresh Token

```
POST /auth/refresh
```

---

### Logout

```
POST /auth/logout
```

---

# Task Routes

All task routes require an **Authorization header**:

```
Authorization: Bearer ACCESS_TOKEN
```

---

### Create Task

```
POST /tasks
```

Request body:

```
{
  "title": "Finish assignment",
  "description": "Complete backend and frontend"
}
```

---

### Get Tasks

Supports pagination, search, and filtering.

```
GET /tasks
```

Example:

```
/tasks?page=1&limit=10
/tasks?search=meeting
/tasks?status=true
```

---

### Get Task by ID

```
GET /tasks/:id
```

---

### Toggle Task Status

```
PATCH /tasks/:id/toggle
```

---

### Delete Task

```
DELETE /tasks/:id
```

---

# Frontend Pages

| Page      | Route        |
| --------- | ------------ |
| Home      | `/`          |
| Login     | `/login`     |
| Register  | `/register`  |
| Dashboard | `/dashboard` |

---

# Authentication Flow

1. User registers an account
2. User logs in
3. Backend returns an **access token**
4. Token is stored in localStorage
5. Requests to protected endpoints include:

```
Authorization: Bearer TOKEN
```

6. Backend middleware verifies the token

---

# Features

- Secure authentication
- User-specific task management
- Pagination support
- Task search functionality
- Task filtering by status
- Responsive UI with Tailwind CSS

---

# Possible Improvements

- Task editing feature
- Automatic refresh token handling
- Protected route middleware in Next.js
- UI enhancements for dashboard
- Task categories or priority levels

---

# Author

Developed as part of a **Software Engineering Assessment**.
