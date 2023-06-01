import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

// export
export default {
  port: process.env.Port,
  DatabaseUrl: process.env.DatabaseUrl,
}
