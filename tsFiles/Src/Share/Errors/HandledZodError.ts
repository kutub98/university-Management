import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from './GenericErrorResponse';
import { IgenericErrorMessage } from './GenericErrorMessage';



const handleZodeError = (error: ZodError): IGenericErrorResponse => {
  const errors: IgenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length-1],
      message: issue?.message
    }
  })
  const statusCode = 400;
  return {
      statusCode,
      message: "Validation Error From ZodError",
      errorMessages:  errors,
  }
}

export default handleZodeError