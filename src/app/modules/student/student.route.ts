import express from "express";
import { StudentControllers } from "./student.controller";
import validaterequest from "./../../middlewares/validateRequest";
import { updateStudentValidationSchema } from "./student.validation";

const router = express.Router();
router.get("/", StudentControllers.getAllStudents);

router.get("/:id", StudentControllers.getSingleStudent);

router.delete("/:id", StudentControllers.deleteStudent);

router.patch(
  "/:id",
  validaterequest(updateStudentValidationSchema),
  StudentControllers.updateStudent
);

export const StudentRoutes = router;
