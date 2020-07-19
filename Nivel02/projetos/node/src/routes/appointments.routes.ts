import { Router, request, response } from 'express';
// import { uuid } from 'uuidv4';
// import { startOfHour, parseISO, isEqual } from 'date-fns';
// import { startOfHour, parseISO } from 'date-fns';
import { parseISO } from 'date-fns';
// import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentsService';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

// SoC: Separation of Concerns (Separação de preocupações)
// DTO - Data Transfer Object (Transferindo um objetos de dados);
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta.

// interface Appointment {
//   id: string;
//   provider: string;
//   date: Date;
// }

// const appointments: Appointment[] = [];

// POST http;//localhost:3333/appointments

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  // const { provider, date } = request.body;

  // // const parsedDate = startOfHour(parseISO(date));
  // const parsedDate = parseISO(date);
  // // const appointmentDate = startOfHour(parsedDate);

  // // // const findAppointmentInSameDate = appointments.find(appointment =>
  // // //   isEqual(parsedDate, appointment.date),
  // // // );
  // // const findAppointmentInSameDate = appointmentsRepository.findByDate(
  // //   parsedDate,
  // // );

  // // if (findAppointmentInSameDate) {
  // //   return response
  // //     .status(400)
  // //     .json({ message: 'This appointment is already booked' });
  // // }

  // // // const appointment = {
  // // //   id: uuid(),
  // // //   provider,
  // // //   date: parsedDate,
  // // // };

  // // // const appointment = new Appointment(provider, parsedDate);

  // // // appointments.push(appointment);
  // // // const appointment = appointmentsRepository.create(provider, parsedDate);
  // // const appointment = appointmentsRepository.create({
  // //   provider,
  // //   // date: parsedDate,
  // //   date: appointmentDate,
  // // });

  // // return response.json({ message: 'Hello World' });
  // // return response.json(appointments);
  // const createAppointment = new CreateAppointmentService(
  //   appointmentsRepository,
  // );

  // const appointment = createAppointment.execute({ date: parsedDate, provider });

  // return response.json(appointment);
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
