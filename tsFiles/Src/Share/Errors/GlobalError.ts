
import { ErrorRequestHandler,zaAcc  } from "express"
import config from "../../config"
import ValidationErrors from "./ValidationError";
import { errorlogger } from "../logger";
import { IgenericErrorMessage } from "./GenericErrorMessage";
import ApiError from "./ApiError";


const GlobalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {

  config.env === "development" ? console.log("GlobalErrorHandler", error) : errorlogger.error("GlobalErrorHandler", error)

  let statusCode = 500;
  let message = 'Something went wrong by global!';
  let errorMessages: IgenericErrorMessage[] = [];

  console.log(error, "hi how are u")
  if (error?.name === 'ValidationError') {
    const simplifiedError = ValidationErrors(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
        {
          path: '',
          message: error?.message,
        },
      ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
        {
          path: '',
          message: error?.message,
        },
      ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next(error);
};

export default GlobalErrorHandler;



