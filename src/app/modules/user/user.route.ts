import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { createstudentValidationSchema } from "../student/student.validation";
import validaterequest from "../../middlewares/validateRequest";

const router = express.Router();



router.post(
  "/create-student",
  validaterequest(createstudentValidationSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
