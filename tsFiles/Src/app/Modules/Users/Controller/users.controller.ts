import { UserService } from './../Services/UserService';
import { RequestHandler, NextFunction, Request, Response } from 'express'


// const createUser = async (req: Request, res: Response, next: NextFunction) => {
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { users } = req.body
    const creatingUser = await UserService.CreatingUsers(users)
    res.status(200).json({
      status: true,
      message: 'Successfully created Users',
      data: creatingUser,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
}