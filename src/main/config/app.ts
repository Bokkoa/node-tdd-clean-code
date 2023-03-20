import * as express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'

dotenv()
const app = express()
app.use(express.json())

// ROUTES INIT
routes(app)
export default app
