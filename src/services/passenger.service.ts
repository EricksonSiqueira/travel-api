import StatusCode from '../types/statusCode';
import { passengerModel } from '../models/passenger.model';
import { Passenger } from '../types/passengers.interface';

import { validateNewPassenger } from './validations/validationsInputsValues';

export const passengerService = {
  async createPassenger({ name, email, phone }: Omit<Passenger, 'id'>) {
    const error = validateNewPassenger({ name, email, phone });

    if (error) {
      return { status: error.status, message: error.message };
    }

    const newPassengerId = await passengerModel.insert({ name, email, phone });

    const newPassenger = {
      id: newPassengerId,
      name,
      email,
      phone,
    };

    return { status: StatusCode.CREATED, passenger: newPassenger };
  },
};
