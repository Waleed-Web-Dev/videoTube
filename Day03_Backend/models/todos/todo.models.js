import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content :{
    type: String,
    required: true
  },

  completed: {
    type: Boolean,
    default: false,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  subTodo : {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
      }
    ]
  }

}, {timestamps: true})

export const TodoSchema = mongoose.model("TodoSchema", todoSchema)