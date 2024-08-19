import mongoose from "mongoose"

const patientSchema = mongoose.Schema({
  name: {
    type: String, 
    requried: true
  },

  age: {
    type: Number,
    required: true
  },

  gender: {
    type: String,
    enum: ["F","M"]
  },

  illness: {
    type: String,
    required: true
  },

  bloodgroup : {
    type: String,
    required: true
  },

  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  }
}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)