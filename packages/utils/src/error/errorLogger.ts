import { Request, Response, NextFunction } from "express";

export const errorLogger = (
  e: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(e);
  next(e);
};
