import express from "express"
import { UserRouter } from "../Modules/Users/Router/user.router"
import { SemesterRouter } from "../Modules/AcademicSemester/Router/AcademicSemester"
const routes = express.Router()



const ModuleRoute = [
  {
    path: "/users",
    routes: UserRouter
  },
  {
    path: "/acdmcSemester",
    routes: SemesterRouter
  }
]
ModuleRoute.forEach((route) => routes.use (route.path, route.routes))

// routes.use('/users', UserRouter)
// routes.use('/acdmcSemester', SemesterRouter)

export const AppRoutes = routes