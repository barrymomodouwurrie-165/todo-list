import express from "express";
import router from "./routers/tasksRouter.js";
import dotenv from "dotenv";
import db_connect from "./db.js"

const app = express();
dotenv.config();
db_connect()

const PORT = process.env.PORT || 5001

app.use("/api/tasks", router);

app.listen(5001, () => {
  console.log(`Sever running at port: ${PORT}`);
});
