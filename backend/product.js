import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  image: { type: String }, // For now, a single URL
  rating: {
      rate: { type: Number }, // double
      count: { type: Number } // int32
    }
})

const Product = mongoose.model('Product', userSchema)
export default Product
