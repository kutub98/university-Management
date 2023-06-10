import mongoose from "mongoose";
import { IGenericErrorResponse } from "./GenericErrorResponse";
import { IgenericErrorMessage } from "./GenericErrorMessage";




const ValidationErrors = (error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IgenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
}

export default ValidationErrors;










