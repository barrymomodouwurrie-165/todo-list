import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  try {
    res.status(200).send("tasks successfully sent. Thank you!");
  } catch (error) {
    console.error("tasks not send");
  }
})


export default router