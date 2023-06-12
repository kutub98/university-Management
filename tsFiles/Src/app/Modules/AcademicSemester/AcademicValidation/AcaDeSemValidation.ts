import { z } from "zod";
import { academicSemesterConstanSeasonCode, academicSemesterConstanSeasonTitle, academicSemesterConstantMonth } from "../Constant/AcademicConstant";

const AcademicSemesterZodSchema = z.object({
  body: z.object({
    //Title
    title: z.enum([...academicSemesterConstanSeasonTitle] as [string, ...string[]], {
      required_error: "Academic Semester Season title is Required"
    }),

    //Code
    code: z.enum([...academicSemesterConstanSeasonCode] as [string, ...string[]], {
      required_error: "Academic Semester Season code is Required"
    }),

    //Year
    year: z.number({
      required_error: "Academic Semester Season Year is Required"
    }),

    //StartMonth
    startMonth: z.enum([...academicSemesterConstantMonth] as [string, ...string[]], {
      required_error: "Academic Semester Season startMonth name is Required"
    }),

    //EndMonth
    endMonth: z.enum([...academicSemesterConstantMonth] as [string, ...string[]], {
      required_error: "Academic Semester Season endMonth name is Required"
    })
  })
});

export const AcademicValidation = {
  AcademicSemesterZodSchema
};
