export type IRespondStatus<T> = {
  statusCode: number;
  success: boolean,
  message: string | null;
  meta: {
    page: number,
    limit: number,
    total: number
  },
  data?: T | null,

}