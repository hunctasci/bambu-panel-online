import mongoose, { Schema } from "mongoose";
import { EmployeeType } from "@/lib/types";

const EmployeeSchema = new Schema<EmployeeType>(
  {
    firstName: { type: String }, // first name
    lastName: { type: String }, // last name
    age: { type: String }, // age (updated to string)
    address: { type: String }, // address
    phoneNumber: { type: String }, // phone number
    maritalStatus: { type: String }, // marital status
    smoking: { type: String }, // smoking usage
    residencyPermit: { type: String }, // residency permit
    experience: { type: String }, // experience
    competencies: { type: String }, // skills
    petsInfo: { type: String }, // skills
    references: { type: String }, // references
    salaryExpectation: { type: String }, // salary expectation
    residencyExpectation: { type: String }, // residency expectation
    preferredDistrict: { type: String }, // preferred district
    notes: { type: String }, // preferred district
    image: {
      publicId: {
        type: String,
      },
      url: {
        type: String,
      },
    }, // image
  },
  { timestamps: true },
);

const Employee =
  mongoose.models?.Employee ||
  mongoose.model<EmployeeType>("Employee", EmployeeSchema);

export default Employee;
