/* import express from "express";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

connectDB();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`.magenta.underline);
});
 */

import dotenv from "dotenv";

dotenv.config();

console.log(process.env.FOO);
