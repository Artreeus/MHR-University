import { Types } from "mongoose";

export type TPreRequisiteCourses = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

// course type

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted?: boolean;
  preRequisiteCourses: [TPreRequisiteCourses];
};

// faculty type

export type TCoursefaculty = {
  course: Types.ObjectId;
  faculties: [Types.ObjectId];
};
