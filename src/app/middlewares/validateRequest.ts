import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validaterequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        //   Validation
        await schema.parseAsync({
          body: req.body,
        });
  
        return next();
      } catch (err) {
        next(err);
      }
    };
  };

  export default validaterequest;