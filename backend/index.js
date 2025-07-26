// const express =require("express"); common js
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from 'cors'
import path from "path";
import { app, server } from "./src/lib/socket.js";
import authRoutes from "./src/routes/auth.route.js"
import messageRoutes from "./src/routes/message.route.js"
import { connectDB } from "./src/lib/db.js";

dotenv.config()
const PORT = process.env.PORT;
const __dirname = path.resolve();

// app.use(express.json())
app.use(express.json({ limit: "5mb" })); // or "10mb" if needed
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

app.use(cookieParser())

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:8000",
  "http://localhost:3000",
  "http://localhost:5000",
  "https://chat-app-git-main-shreyansh-gupta-s-projects.vercel.app/"
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Cookies:", req.cookies);
  next();
});


app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        process.env.NODE_ENV !== "production"
      ) {
        callback(null, true);
      } else {
        console.log("CORS blocked for origin:", origin);
        callback(null, true); // Temporarily allow all origins
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
     allowedHeaders: ["Content-Type", "Authorization"],
  })
);



app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () =>{
    console.log("server is running on PORT:" + PORT);
    connectDB()
});