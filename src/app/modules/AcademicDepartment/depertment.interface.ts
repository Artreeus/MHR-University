import { Types } from "mongoose";

export type TAcademicDepartment = {
  name: String;
  academicFaculty: Types.ObjectId;
};
