import ApiError from '../../../../Share/Errors/ApiError'
import config from '../../../../config/index'
import { IUser } from '../Interface/User.interface'
import { Users } from '../Modals/User.Model'
import { generateUsersId } from '../Utils/users.utils'

const CreatingUsers = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUsersId()
  user.id = id as string

  if (!user.password) {
    user.password = config.defaultUsersPassword as string
  }

  const createdUsers = await Users.create(user)
  if (!createdUsers) {
    throw new ApiError(400, 'Failed to Creating User')
  } else {
    console.log('Successfully created users')
  }
  return createdUsers
}

export const UserService = {
  CreatingUsers,
}
