

import ApiError from "../../../../Share/Errors/ApiError";
import { AcademicSemesterTitleCodeMappr } from "../Constant/AcademicConstant";
import { IAcademicSemester } from "../Interface/AcaSemInterface";
import { AcademicSemester } from '../Modal/AcadSemModal';
import status from "http-status"
const CreateSemester =async (payload: IAcademicSemester) : Promise<IAcademicSemester> =>{

  if(AcademicSemesterTitleCodeMappr[payload.title] !== payload.code){
      throw new ApiError(status.UNPROCESSABLE_ENTITY, "Sorry! Invalid Semester Code")
  }
   const result = await AcademicSemester.create(payload)
   return result
}

export const  AcademicSemesterService = {
  CreateSemester
}