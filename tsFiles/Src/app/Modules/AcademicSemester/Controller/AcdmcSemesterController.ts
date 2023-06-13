import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../../../Share/CatchAsync/CatchAync";
import { AcademicSemesterService } from "../Service/AcdmcSmstr";
import ResponseStatus from "../../../../Share/ResponsStatus/ResponsStatus";
import httpStatus from "http-status";
import Pick from "../../../../Share/Pick/Pick";
import { paginationConstantFields } from "../../../../Share/Constant/PaginationContstant";


const creatingSemesterController = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.CreateSemester({ ...academicSemesterData })

    // res.status(200).json({
    //   status: true,
    //   message: "Created Semester successfully ",
    //   data: result
    // })

    ResponseStatus(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Successfully created academic semester",
      data: result,
      meta: {
        page: 0,
        limit: 0,
        total: 0
      }
    })
    next()
  }
)

const getAllSemesters = CatchAsync(async (
  req: Request, res:Response, next: NextFunction)=> {
    // const paginationOption = {
    //   page: Number(req.query.page)
    //   limit: Number(req.query.limit),
    //   sortBy: req.query.shortBy,
    //   sortOrder: req.query.sortOrder
    // }

    const paginationOption = Pick(req.query, paginationConstantFields);
const result = await AcademicSemesterService.getAllSemester(paginationOption);

const meta = {
  page: Number(paginationOption.page) || 0,
  limit: Number(paginationOption.limit) || 0,
  total: Number(paginationOption.total) || 0,
};

ResponseStatus(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: "Semester retrieved successfully",
  meta: meta,
  data: result.data,
});

next();

  }
)

export const AcademicSemesterController = {
  creatingSemesterController,
  getAllSemesters
}