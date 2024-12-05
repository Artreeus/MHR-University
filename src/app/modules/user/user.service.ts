import config from '../../config';
import { AcademicSemester } from '../AcademicSemester/semester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';

import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // If password is not given, use default password
  userData.password = password || (config.default_password as string);

  // Set student role
  userData.role = 'student';

  // Find academic semester info
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester);

  // Check if the semester was found
  if (!admissionSemester) {
    throw new Error("Academic semester not found");
  }

  // Set generated ID
  userData.id = await generateStudentId(admissionSemester);

  // Create a user
  const newUser = await User.create(userData);

  // Create a student
  if (Object.keys(newUser).length) {
    // Set id and _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; // Reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};
