import { Router } from 'express';
// import { uuid } from 'uuidv4';
// import { startOfHour, parseISO, isEqual } from 'date-fns';
import { startOfHour, parseISO } from 'date-fns';
// import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

// interface Appointment {
//   id: string;
//   provider: string;
//   date: Date;
// }

// const appointments: Appointment[] = [];

// POST http;//localhost:3333/appointments

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  // const findAppointmentInSameDate = appointments.find(appointment =>
  //   isEqual(parsedDate, appointment.date),
  // );
  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  // const appointment = {
  //   id: uuid(),
  //   provider,
  //   date: parsedDate,
  // };

  // const appointment = new Appointment(provider, parsedDate);

  // appointments.push(appointment);
  const appointment = appointmentsRepository.create(provider, parsedDate);

  // return response.json({ message: 'Hello World' });
  return response.json(appointments);
});

export default appointmentsRouter;
