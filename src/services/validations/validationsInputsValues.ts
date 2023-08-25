import { Passenger } from '../../types/passengers.interface';
import { addPassengerSchema } from './schemas/passenger.schema';

const validateNewPassenger = ({
  name,
  email,
  phone,
}: Omit<Passenger, 'id'>) => {
  const { error } = addPassengerSchema.validate({ name, email, phone });

  if (error) {
    return { status: 'INVALID_VALUE', message: error.message };
  }
};

export { validateNewPassenger };
