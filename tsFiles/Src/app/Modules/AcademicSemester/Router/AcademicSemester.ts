import express from 'express'
// import { UserController } from '../Controller/users.controller'
// import { UserValidation } from '../UserValidation/User.validation'
import validateRequest from '../../../../Share/MiddleWares/RequestValidate'
import { AcademicValidation } from '../AcademicValidation/AcaDeSemValidation'
import { AcademicSemesterController } from '../Controller/AcdmcSemesterController'


const router = express.Router()

// router.post('/createUser', userRouter.createUser)
router.post("/createSemester", validateRequest(AcademicValidation.AcademicSemesterZodSchema), AcademicSemesterController.creatingSemesterController)
export const  SemesterRouter = router
