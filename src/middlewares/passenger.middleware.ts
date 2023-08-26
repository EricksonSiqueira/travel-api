import { Passenger } from '../types/passengers.interface';
import { missingFieldTextResponse } from '../utils/missingFieldTextResponse';
import { NextFunction, Request, Response } from 'express';

export const passangerMiddleware = {
  async validateCreatePassenger(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { body } = req;
    const requiredFields: (keyof Omit<Passenger, 'id'>)[] = [
      'email',
      'name',
      'phone',
    ];

    const createPassangerError = missingFieldTextResponse<
      Omit<Passenger, 'id'>
    >(body, requiredFields);

    if (createPassangerError) {
      return res.status(400).json({ message: createPassangerError });
    }

    return next();
  },
};
