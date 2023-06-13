import { SortOrder } from "mongoose"

type IPageOption = {
  page?: number | null,
  limit?: number | null,
  sortBy?: string,
  sortOrder?: SortOrder
}

type IPageOptionResult = {
  page: number,
  limit: number,
  skip: number,
  sortBy: string,
  sortOrder: SortOrder
}

 const calculatePagination = (options: IPageOption) : IPageOptionResult  =>{
  const page = Number(options.page || 1)
  const limit = Number(options.limit || 10)
  const skip = (page -1) * limit
  const sortBy = options.sortBy || "createdAt";
  const sortOrder= "asc" || "desc"
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder
  }
}

export const PaginationHelper = {
  calculatePagination
}