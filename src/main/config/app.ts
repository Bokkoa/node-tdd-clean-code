import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

dotenv()
const app = express()
// app.use(express.json())
middlewares(app)

// ROUTES INIT
routes(app)
export default app
