import { Request, Response } from 'express';
import { passengerService } from '../services';

export const passengerController = {
  async createPassenger(req: Request, res: Response) {
    const { name, email, phone } = req.body;

    const passangerServiceResponse = await passengerService.createPassenger({
      name,
      email,
      phone,
    });

    return res
      .status(passangerServiceResponse.status)
      .json(passangerServiceResponse.passenger);
  },
};
