import connection from './connection';
import { camelizeKeys } from 'humps';
import { Passenger } from '../types/passengers.interface';
import {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} from '../utils/generateFormattedQuery';

export const passengerModel = {
  async findAll(): Promise<Passenger[]> {
    const [passengers] = await connection.execute('SELECT * FROM passengers');

    return camelizeKeys(passengers) as Passenger[];
  },

  async findById(id: Passenger['id']) {
    const [result] = await connection.execute(
      'SELECT * FROM passengers WHERE id = ?',
      [id]
    );
    const [passenger] = result as Passenger[];

    return camelizeKeys(passenger) as Passenger;
  },

  async insert(passenger: Omit<Passenger, 'id'>) {
    const columns = getFormattedColumnNames(passenger);
    const placeholders = getFormattedPlaceholders(passenger);
    const query = `INSERT INTO passengers (${columns}) VALUE (${placeholders})`;

    const [result] = await connection.execute(query, [
      ...Object.values(passenger),
    ]);

    const { insertId } = result as { insertId: Passenger['id'] };

    return insertId;
  },

  async update(
    passengerId: Passenger['id'],
    newPassengerData: Omit<Passenger, 'id'>
  ) {
    const passengerColumsToUpdate = getFormattedColumnNames(newPassengerData);
    const [result] = await connection.execute(
      `UPDATE passengers SET ${passengerColumsToUpdate} WHERE id = ?`,
      [Object.values(newPassengerData), passengerId]
    );

    return result;
  },
};
