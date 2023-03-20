import app from '../config/app'
import ConnectDB from '../../infra/db/mongodb/mongoDbConnect'

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is working Port: ${PORT}`)
  ConnectDB()
})
