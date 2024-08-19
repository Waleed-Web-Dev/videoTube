import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },

  description :{
    type: String,
    required: true
  },

  price: {
    type: Number,
    required :true,
    default :0
  },

  stock :{
    type: Number,
    default :0
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  },

  productimage: {
    type: String
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Category"
  }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)