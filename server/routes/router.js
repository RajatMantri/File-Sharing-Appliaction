import express from "express";
import { uploadFile, getFile } from "../controllers/file.js";
import { upload } from "../utils/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/file/:id", getFile);

export { router };
