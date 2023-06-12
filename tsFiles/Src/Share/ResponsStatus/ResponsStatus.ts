




// const ResponseStatus =<T> (res: Response, data: {
//     statusCode: number;
//     success: boolean,
//     message: string | null;
//     data?: T

// }) : void => {
//     res.status(data.statusCode).json({
//       statusCode: data.statusCode,
//       success: data.success,
//       message: data.message || null,
//       data: data.data || null
//     })
// }

import { Response } from "express";
type IRespondStatus<T> = {
  statusCode: number;
  success: boolean,
  message: string | null;
  data?: T | null
}

const ResponseStatus = <T>(res: Response, data: IRespondStatus<T>): void => {
  const ResponseData: IRespondStatus<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null
  }
  res.status(data.statusCode).json(ResponseData)
}

export default ResponseStatus