import { IgenericErrorMessage } from "./GenericErrorMessage"

export type IGenericErrorResponse = {
  statusCode: number,
  message: string,
  errorMessages: IgenericErrorMessage[]

}