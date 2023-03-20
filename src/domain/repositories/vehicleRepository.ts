import mongoose from 'mongoose'
import VehicleSchema from '../models/vehicleModel'

export default mongoose.model('vehicle', VehicleSchema)
