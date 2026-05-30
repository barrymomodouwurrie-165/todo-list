import express, { json } from "express";
import router from "./routers/tasksRouter.js";
import dotenv from "dotenv";
import db_connect from "./db.js";
import cors from "cors";

const app = express();
dotenv.config();
db_connect();

app.use(express.json());
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  }),
);

app.use("/api/tasks", router);

app.listen(4000, () => {
  console.log(`Sever running at port: ${PORT}`);
});
