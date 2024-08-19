import mongoose from "mongoose"

const subTodo = new mongoose.Schema({
  content: {
    type : String,
    required: true
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  },

  completed: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true})

export const SubTodo = mongoose.model("SubTodo", subTodo)