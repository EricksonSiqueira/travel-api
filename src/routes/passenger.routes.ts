import StatusCode from '../types/statusCode';
import { passengerModel } from '../models';
import { Router } from 'express';
import { passengerController } from '@/controllers/passenger.controller';

const passengerRoute = Router();

passengerRoute.get('/', async (_req, res) => {
  const passengers = await passengerModel.findAll();

  return res.status(200).json(passengers);
});

passengerRoute.get('/:passengerId', async (req, res) => {
  const { passengerId } = req.params;

  const passenger = await passengerModel.findById(+passengerId);

  if (!passenger) {
    return res
      .status(StatusCode.NOT_FOUND)
      .json({ message: 'Passenger not found' });
  }

  return res.status(StatusCode.OK).json(passenger);
});

passengerRoute.post('/', passengerController.createPassenger);

export { passengerRoute };
