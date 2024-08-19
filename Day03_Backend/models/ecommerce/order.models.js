import mongoose from "mongoose"

const productquantitySchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  productquantity : {
    type: Number,
    required: true
  }
})


const orderSchema = mongoose.Schema({
  payment: {
    type: Number,
    required: true
  },

  orderedby :{
    type: mongoose.Schema.Types.ObjectId,
    ref :"User"
  },

  orderquantity: [productquantitySchema],

  status: {
    type: String,
    enum : ["PENDING" , "CANCELLED", "DELIVERED"],
    default: "PENDING"
  }
} , {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)