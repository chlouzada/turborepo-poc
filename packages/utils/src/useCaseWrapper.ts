import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";

interface IUC {
  execute(req: Request, res: Response): Promise<void>;
}

export const useCaseWrapper =
  (useCase: IUC) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const uc = container.resolve(useCase as any) as IUC;
      uc.execute(req, res);
    } catch (error) {
      next(error);
    }
  };
