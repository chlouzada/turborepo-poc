import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { Router } from "express";
import { errorHandler } from "./error/errorHandler";
import { errorLogger } from "./error/errorLogger";

export const server = (path: string, router: Router): express.Express => {
  dotenv.config();
  const app = express();
  app.use(express.json({}));
  app.use(cors({ origin: "*" })); // TODO: limitar o cors
  app.use(path, router);
  app.use(errorLogger);
  app.use(errorHandler);
  return app;
};
