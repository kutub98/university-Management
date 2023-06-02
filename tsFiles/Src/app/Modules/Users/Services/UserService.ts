// import { Request, Response } from "express";

import config from '../../../../config/index'
import { IUser } from '../Interface/User.interface'
import { Users } from '../User.Model'
import { generateUsersId } from '../Utils/users.utils'

// const CreatingUsers =async (req:Request, res: Response) => {
//   const createdUsers = await
// }

// We won't use the request/response in service file , it will be used by controller

const CreatingUsers = async (user: IUser): Promise<IUser | null> => {
  // Generated auto incremental id for users
    const id = await generateUsersId()
    // console.log(id);
    user.id = id as string

  // Default password for users
  if (!user.password) {
    user.password = config.defaultUsersPassword as string
  }
  // user can be as a= student | faculty | admin

  const createdUsers = await Users.create(user)
  if (!createdUsers) {
    throw new console.error('Failed to Creating User')
  } else {
    console.log('Successfully created users')
  }
  return createdUsers
}

export default {
  CreatingUsers,
}
