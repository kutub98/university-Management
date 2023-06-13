import express from 'express'
import validateRequest from '../../../../Share/MiddleWares/RequestValidate'
import { AcademicValidation } from '../AcademicValidation/AcaDeSemValidation'
import { AcademicSemesterController } from '../Controller/AcdmcSemesterController'


const router = express.Router()

// router.post('/createUser', userRouter.createUser)
router.post("/createSemester", validateRequest(AcademicValidation.AcademicSemesterZodSchema), AcademicSemesterController.creatingSemesterController)

router.get("/", AcademicSemesterController.getAllSemesters)
export const  SemesterRouter = router
