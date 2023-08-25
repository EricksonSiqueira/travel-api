import express from 'express';
import { passengerModel } from './models';

const app = express();

app.use(express.json());

app.get('/passengers', async (req, res) => {
  const passengers = await passengerModel.findAll();

  return res.status(200).json(passengers);
});

export default app;
