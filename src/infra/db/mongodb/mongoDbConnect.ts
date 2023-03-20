import mongoose from 'mongoose'

export default (): void => {
  const URI = process.env.MONGO_URI ?? ''
  mongoose.connect(URI, { dbName: 'tdd' }).then(() => {
    console.log('MongoDb connected')
  }).catch((err) => {
    console.log('There was an error starting mongoose: ', err.message)
  })
}
