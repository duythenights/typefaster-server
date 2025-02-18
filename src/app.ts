import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use("/api/auth", userRoutes);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) =>
    console.error(`${process.env.MONGO_URI}MongoDB connection error:`, err)
  );

const PORT = process.env.PORT || 5000;
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
