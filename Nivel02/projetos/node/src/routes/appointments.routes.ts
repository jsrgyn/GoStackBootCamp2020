import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

// POST http;//localhost:3333/appointments

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  // return response.json({ message: 'Hello World' });
  return response.json(appointments);
});

export default appointmentsRouter;
