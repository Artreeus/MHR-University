import { Types } from "mongoose";

export type TAcademicDepartment = {
  name: String;
  academicfaculty: Types.ObjectId;
};
