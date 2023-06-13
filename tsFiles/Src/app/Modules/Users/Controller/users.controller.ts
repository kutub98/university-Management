
import httpStatus from 'http-status';
import { CatchAsync } from '../../../../Share/CatchAsync/CatchAync';
import ResponseStatus from '../../../../Share/ResponsStatus/ResponsStatus';
import { UserService } from './../Services/UserService';
import { NextFunction, Request, Response } from 'express'


// const createUser = async (req: Request, res: Response, next: NextFunction) => {
const createUser = CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { users } = req.body
  console.log(users)
  const creatingUser = await UserService.CreatingUsers(users)
  // res.status(200).json({
  //   status: true,
  //   message: 'Successfully created Users',
  //   data: creatingUser,
  // })
  ResponseStatus(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Successfully created user",
    data: creatingUser
  })
  next()

})

export const UserController = {
  createUser,
}