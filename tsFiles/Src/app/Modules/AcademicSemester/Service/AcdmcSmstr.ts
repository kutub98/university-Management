


import { SortOrder } from "mongoose";
import ApiError from "../../../../Share/Errors/ApiError";
import { PaginationHelper } from "../../../../Share/Helper/PaginationHelper";
import { IGenericResponseForPagination } from "../../../../Share/Interface/IGenericResponseForPagination";
import { IpaginationOption } from "../../../../Share/Interface/PaginationInterface";
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

const getAllSemester = async (paginationOption: IpaginationOption) : Promise<IGenericResponseForPagination<IAcademicSemester[]>>=>{

    const {page, limit, skip, sortBy, sortOrder} = PaginationHelper.calculatePagination(paginationOption)

    const sortCondition : {[key: string]: SortOrder} = {}
    if(sortBy && sortOrder) {
      sortCondition[sortBy] = sortOrder
    }
    const result  = await  AcademicSemester.find().sort(sortCondition).skip(skip).limit(limit)
    const total = await AcademicSemester.countDocuments()

    return {
      meta : {
        page,
        limit ,
        total,
      },
      data: result
    }
}

export const  AcademicSemesterService = {
  CreateSemester, getAllSemester
}