import express  from "express";
import userRouter from "../Controller/users.controller";

const router = express.Router()

router.post("/createUser", userRouter.createUser)

export default router

