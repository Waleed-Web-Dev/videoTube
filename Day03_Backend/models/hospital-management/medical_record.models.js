import mongoose from "mongoose"

const medicalrecordSchema = mongoose.Schema({}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalrecordSchema)