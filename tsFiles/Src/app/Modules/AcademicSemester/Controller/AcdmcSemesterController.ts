import { NextFunction, Request, RequestHandler, Response } from "express";
import { CatchAsync } from "../../../../Share/CatchAsync/CatchAync";
import { AcademicSemesterService } from "../Service/AcdmcSmstr";
import ResponseStatus from "../../../../Share/ResponsStatus/ResponsStatus";
import httpStatus from "http-status";


const creatingSemesterController = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.CreateSemester({ ...academicSemesterData })

    // res.status(200).json({
    //   status: true,
    //   message: "Created Semester successfully ",
    //   data: result
    // })
    next()
    ResponseStatus(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Successfully created academic semester",
      data: result
    })

  }
)

export const AcademicSemesterController = {
  creatingSemesterController
}