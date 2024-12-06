import mongoose, { Schema } from "mongoose";
import { EmployerType } from "@/lib/types";

const EmployerSchema = new Schema<EmployerType>(
  {
    firstName: { type: String }, // first name
    lastName: { type: String }, // last name
    age: { type: String }, // age
    placeType: { type: String }, // place type
    occupation: { type: String }, // occupation
    requestedJob: { type: String }, // requested job
    childrenInfo: { type: String }, // children info
    petsInfo: { type: String }, // pets info (now string)
    healthCondition: { type: String }, // health condition
    cleaningRequests: { type: String }, // cleaning requests
    mealRequests: { type: String }, // meal requests
    insuranceInterest: { type: String }, // interest in insurance (now string)
    budget: { type: String }, // budget (now string)
    notes: { type: String }, // notes
  },
  { timestamps: true },
);

const Employer =
  mongoose.models?.Employer ||
  mongoose.model<EmployerType>("Employer", EmployerSchema);

export default Employer;
