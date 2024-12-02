import express from "express";
import cors from "cors";
import { appRouter } from './routes'
import connectDB from "./config/db";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use("/api", appRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  });