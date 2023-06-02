import { Request, Response } from 'express'
import UserService from '../Services/UserService'

const createUser = async (req: Request, res: Response) => {
  try {
    const { users } = req.body
    const creatingUser = await UserService.CreatingUsers(users)
    res.status(200).json({
      status: true,
      message: 'Successfully created Users',
      data: creatingUser,
    })
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Sorry, failed to create the user!',
    })
  }
}

export default {
  createUser,
}
