import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log(
    `Requested URL : ${req.url} is visited with method ${req.method}`
  );
  next();
};

export default logger;
