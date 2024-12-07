import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department Must Be A String",
      required_error: 'Department name is required'
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic Faculty Must Be A String",
      required_error: 'Faculty is required'
    }),
  }),
});


const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
      name: z.string({
        invalid_type_error: "Academic Department Must Be A String",
        required_error: 'Department name is required'
      }).optional(),
      academicFaculty: z.string({
        invalid_type_error: "Academic Faculty Must Be A String",
        required_error: 'Faculty is required'
      }).optional(),
    }),
  });
  

  export const AcademicDepartmentValidation={
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
  }