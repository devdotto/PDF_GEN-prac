import { NextFunction } from 'express';

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Auth');
  next();
};
