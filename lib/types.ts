/* eslint-disable @typescript-eslint/no-explicit-any */
export type CompetencyOption = {
  value: string;
  label: string;
};

export interface EmployeeType {
  _id: any;
  firstName?: string; // first name
  lastName?: string; // last name
  age?: string; // age
  address?: string; // address
  phoneNumber?: string; // phone number
  maritalStatus?: string; // marital status
  smoking?: string; // smoking usage
  residencyPermit?: string; // residency permit
  experience?: string; // experience
  competencies?: string; // skills
  petsInfo?: string; // Pets Info
  references?: string; // references
  salaryExpectation?: string; // salary expectation
  residencyExpectation?: string; // residency expectation
  preferredDistrict?: string; // preferred district
  image?: {
    publicId?: string; // image public ID
    url?: string; // image URL
  }; // image
  notes?: string; // notes
  createdAt?: Date; // timestamps (createdAt)
  updatedAt?: Date; // timestamps (updatedAt)
}

export interface EmployerType {
  _id: any;
  firstName?: string; // first name
  lastName?: string; // last name
  age?: string; // age
  placeType?: string; // place type
  occupation?: string; // occupation
  requestedJob?: string; // requested job
  childrenInfo?: string; // children info
  petsInfo?: string; // pets info (now string)
  healthCondition?: string; // health condition
  cleaningRequests?: string; // cleaning requests
  mealRequests?: string; // meal requests
  insuranceInterest?: string; // interest in insurance (now string)
  budget?: string; // budget (now string)
  notes?: string; // notes
  createdAt?: Date; // timestamps (createdAt)
  updatedAt?: Date; // timestamps (updatedAt)
}

export interface UserType {
  email: string;
  username: string;
  password: string;
}

export interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}
