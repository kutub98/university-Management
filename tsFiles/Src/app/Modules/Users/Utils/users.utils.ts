

import { Users } from "../Modals/User.Model"



export const findLastUser = async () => {

  const lastUser = await Users.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser
}

let counter = 1 
let currentYear = new Date().getFullYear()

export const generateUsersId = async () => {
  
  let currentYearLastDigits = currentYear.toString().slice(-4) 
  let randomDigits = counter.toString().padStart(4, '0') 
  let studentId = `${currentYearLastDigits}${randomDigits}` 

  counter++

  

  studentId = `${currentYearLastDigits}${randomDigits}` // Update studentId with

  return studentId
}

