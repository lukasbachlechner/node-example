import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import blogRouter from "./routes/blogRouter.js";

dotenv.config();

connectDB();

const app = express();

const PORT = 4321;

app.use(express.json());
app.use(cors());

// Logger middleware
app.use((req, res, next) => {
  console.log("[Request]: ".yellow + req.path.magenta);
  return next();
});

app.get("/api/status", (req, res) => {
  res.sendStatus(200);
});

app.use("/api/posts", blogRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});
