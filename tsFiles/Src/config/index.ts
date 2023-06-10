import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

// export
export default {
  env: process.env.NODE_ENV,
  port: process.env.Port,
  DatabaseUrl: process.env.DATABASE_URL,
  defaultUsersPassword: process.env.defaultUsersPassword,
}
