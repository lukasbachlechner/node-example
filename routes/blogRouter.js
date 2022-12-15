import express from "express";
import blogController from "../controller/blogController.js";

const router = express.Router();

router.get("/", blogController.getAll);
router.post("/create", blogController.create);

export default router;
