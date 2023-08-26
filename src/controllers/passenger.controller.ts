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

  async findAll(_req: Request, res: Response) {
    const passengers = await passengerService.findAll();

    return res.status(200).json(passengers);
  },
};
