import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());

connectDB().then(() => {
    console.log("mongo db is Connected");
  app.listen(PORT, () => {
    console.log(`e basket server running on PORT ${PORT}`);
  });
});

