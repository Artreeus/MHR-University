import express from 'express';
import { StudentControllers } from './student.controller';
import validaterequest from './../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.patch(
    '/:studentId',
    validaterequest(updateStudentValidationSchema),
    StudentControllers.updateStudent,
  );

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
