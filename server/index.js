import express from "express";
import cors from "cors";
import { router } from "./routes/router.js";
import { connectDB } from "./database/db.js";
import { connect } from "mongoose";

const port = 8000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
