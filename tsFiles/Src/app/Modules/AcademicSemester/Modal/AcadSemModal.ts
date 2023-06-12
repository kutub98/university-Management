
import {  Schema, model } from 'mongoose'
import { IAcademicSemester, AcademicSemesterModal } from '../Interface/AcaSemInterface'
import { academicSemesterConstanSeasonCode, academicSemesterConstanSeasonTitle, academicSemesterConstantMonth } from '../Constant/AcademicConstant'
import ApiError from '../../../../Share/Errors/ApiError'
import status from "http-status"

const academiceSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterConstanSeasonTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterConstanSeasonCode
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterConstantMonth
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterConstantMonth
    }
  },
  {
    timestamps: true,
  }
)


academiceSemesterSchema.pre("save",async function (next){
  const isExist = await AcademicSemester.findOne({title: this.title, year: this.year})
  if(isExist){
    throw new ApiError(status.CONFLICT, "This Academic Semester already exist !")
  }
  next()
}) 

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModal>('AcademicSemester', academiceSemesterSchema) // static


  
