<div align="center">
  <br />
  <img src="client/public/images/maketechberry.png" alt="Project Banner" width="200" />
  <br />
  <h1>MakeTechBerry</h1>
</div>

## Project Overview

MakeTechBerry is a modern full-stack web application. The frontend is built using React and Vite, styled with Tailwind CSS, and utilizes Framer Motion for animations. The backend is a Node.js REST API using Express, backed by a MongoDB database with Mongoose. It features secure user authentication via JWT and handles file uploads using Multer.

## 🛠 Tech Stack

### Client (Frontend)
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4, Radix UI components, Headless UI, Framer Motion
- **Routing**: React Router DOM
- **HTTP Client**: Axios

### Server (Backend)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT & bcryptjs
- **File Uploads**: Multer

---

## 📁 File Structure

The workspace is organized as a monorepo containing both the frontend (`client`) and backend (`server`) applications.

### Root Directory
```text
MakeTechBerry/
├── client/          # Frontend React/Vite application
├── server/          # Backend Node.js/Express REST API
└── README.md        # Project documentation
```

### Client Structure (`/client`)
```text
client/
├── public/          # Static assets (images, icons)
├── src/             # Frontend source code
│   ├── assets/      # Media files, global CSS
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility libraries and configurations
│   ├── pages/       # React page components (views)
│   ├── services/    # API calls and external services logic
│   ├── styles/      # Additional CSS and Tailwind custom styles
│   ├── utils/       # Helper functions
│   ├── App.jsx      # Main application routing component
│   └── main.jsx     # React entry point
├── package.json     # Frontend dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js   # Vite configuration
```

### Server Structure (`/server`)
```text
server/
├── src/             # Backend source code
│   ├── config/      # Configuration files (e.g., database connection)
│   ├── controllers/ # Request handlers and business logic
│   ├── middlewares/ # Express middlewares (e.g., auth, error handling)
│   ├── models/      # Mongoose database schemas
│   ├── routes/      # API route definitions
│   ├── utils/       # Helper functions
│   ├── app.js       # Express app setup and middleware registration
│   └── server.js    # Entry point for the Node server
├── uploads/         # Directory for user-uploaded files via Multer
├── package.json     # Backend dependencies and scripts
└── .env             # Environment variables (Mongo URI, JWT Secret)
```

---

## 🚀 Execution Process

Follow these steps to run the application locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas URI)

### 1. Database Setup
Ensure your local MongoDB instance is running, or get a connection string from MongoDB Atlas.

### 2. Backend Setup
1. Open a terminal and navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Environment variables: Make sure your `server/.env` file exists with the following structure:
   ```env
   MONGO_URI=mongodb://localhost:27017/maketech-berry
   JWT_SECRET=your_super_secret_jwt_key
   PORT=5000
   NODE_ENV=development
   ```
4. Start the backend development server (uses nodemon):
   ```bash
   npm run dev
   ```
   *The server should now be running on http://localhost:5000*

### 3. Frontend Setup
1. Open a new terminal window and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend should now be running on http://localhost:5173 (or the port specified by Vite)*

### 4. Build for Production
To build the frontend for production, navigate to the `client` directory and run:
```bash
npm run build
```
