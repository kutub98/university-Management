import express from 'express'
import { UserController } from '../Controller/users.controller'


const router = express.Router()

// router.post('/createUser', userRouter.createUser)
router.post("/createUser", UserController.createUser)

export const  UserRouter = router
