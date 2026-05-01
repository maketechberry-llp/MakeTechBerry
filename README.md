<div align="center">
  <br />
  <img src="client/public/images/maketechberry.png" alt="MakeTechBerry Logo" width="200" />
  <br />
  <h1>MakeTechBerry</h1>
  <p>
    <strong>A Modern, High-Performance Full-Stack Web Application</strong>
  </p>
  <p>
    <a href="#project-overview">Overview</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#local-development-setup">Installation</a> •
    <a href="#deployment-guide-production">Deployment</a>
  </p>
</div>

---

## 📖 Project Overview

**MakeTechBerry** is a robust, scalable, and modern full-stack web application designed to deliver an exceptional user experience. The frontend is powered by React and Vite, featuring fluid animations and a responsive, polished UI. The backend is driven by a secure, high-performance Node.js REST API with a MongoDB database. 

This repository contains the complete source code, organized as a monorepo with dedicated `client` and `server` environments.

## ✨ Key Features

- **Responsive & Modern UI**: Built with Tailwind CSS and Framer Motion for a premium, dynamic user interface.
- **Robust Authentication**: Secure user authentication and authorization using JWT and bcrypt.
- **RESTful API Architecture**: Scalable Express.js backend with organized routing and controllers.
- **File Management**: Integrated secure file upload handling via Multer.
- **Optimized Performance**: Lightning-fast frontend tooling powered by Vite.

## 🛠 Tech Stack

### Client-Side (Frontend)
- **Core**: React 19, Vite
- **Styling**: Tailwind CSS v4, Headless UI, Radix UI
- **Animations**: Framer Motion
- **State & Routing**: React Router DOM
- **Network**: Axios

### Server-Side (Backend)
- **Core**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Security**: JSON Web Tokens (JWT), bcryptjs
- **Utilities**: Multer (File Uploads), dotenv

---

## 🚀 Local Development Setup

Follow these steps to configure and run the application locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd MakeTechBerry
```

### 2. Backend Environment Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and configure the following environment variables:
   - `PORT`: The port number for the backend server (e.g., `5000`)
   - `NODE_ENV`: The environment mode (`development` or `production`)
   - `MONGO_URI`: Your MongoDB database connection string
   - `JWT_SECRET`: A secure, secret key for JWT authentication
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server will start on `http://localhost:5000`*

### 3. Frontend Environment Setup
1. Open a new terminal and navigate to the frontend directory:
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
   *The application will be accessible at `http://localhost:5173`*

---

## 🌐 Deployment Guide (Production)

To deploy the application for production use, follow these guidelines:

### Backend Deployment
1. Set the `NODE_ENV` environment variable to `production`.
2. Ensure your `MONGO_URI` points to your production database (e.g., MongoDB Atlas).
3. Use a process manager like **PM2** to run the server in the background:
   ```bash
   npm install -g pm2
   pm2 start src/server.js --name "maketechberry-api"
   ```
4. Configure a reverse proxy (e.g., Nginx) to route traffic to the Node.js backend running on your specified port (default `5000`).

### Frontend Deployment
1. Navigate to the `client` directory and generate the production build:
   ```bash
   cd client
   npm run build
   ```
2. The compiled assets will be located in the `client/dist` directory.
3. Serve these static files using a web server like Nginx, Apache, or a managed service like Vercel, Netlify, or AWS S3.

---

## 📁 File Structure Overview

```text
MakeTechBerry/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets
│   ├── src/                # UI Components, Pages, Services, and Utilities
│   ├── tailwind.config.js  # UI Styling configuration
│   └── vite.config.js      # Bundler configuration
│
└── server/                 # Backend REST API
    ├── src/
    │   ├── controllers/    # Business logic
    │   ├── models/         # Database schemas
    │   ├── routes/         # API endpoints
    │   └── server.js       # Application entry point
    ├── uploads/            # Secure file storage
    └── .env                # Environment secrets
```

---

