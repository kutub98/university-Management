import { Model, Schema, model } from 'mongoose'
import { IUser } from './Users/Interface/User.interface'

type userModel = Model<IUser, object> 
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// const Users = model<IUser>("users", userSchema) // model
export const Users = model<IUser, userModel>("users", userSchema) // static 
