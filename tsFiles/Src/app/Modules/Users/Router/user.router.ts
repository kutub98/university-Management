import express from 'express'
import { UserController } from '../Controller/users.controller'
import { UserValidation } from '../UserValidation/User.validation'
import validateRequest from '../../../../Share/MiddleWares/RequestValidate'


const router = express.Router()

// router.post('/createUser', userRouter.createUser)
router.post("/createUser", validateRequest(UserValidation.createUserZodSchema), UserController.createUser)
export const  UserRouter = router
