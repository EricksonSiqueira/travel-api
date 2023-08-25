import connection from './connection';
import { camelizeKeys } from 'humps';
import { Passenger } from '../types/passengers.interface';

export const passengerModel = {
  async findAll(): Promise<Passenger[]> {
    const [passengers] = await connection.execute('SELECT * FROM passengers');

    return camelizeKeys(passengers) as Passenger[];
  },
  async findById(id: Passenger['id']) {
    const [passengers] = await connection.execute(
      'SELECT * FROM passengers WHERE id = ?',
      [id]
    );

    return camelizeKeys(passengers) as Passenger;
  },
};
