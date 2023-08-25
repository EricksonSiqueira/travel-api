import express from 'express';
import { passengerRoute } from './routes';

const app = express();

app.use(express.json());

app.use('/passengers', passengerRoute);

export default app;
