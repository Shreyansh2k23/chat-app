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
app.use(
    cors({
    origin:["http://localhost:5173", "https://chat-jgdpfxlll-shreyansh-gupta-s-projects.vercel.app"],
    credentials : true,
})
)


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