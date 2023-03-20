import app from '../config/app'

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is working Port: ${PORT}`)
})