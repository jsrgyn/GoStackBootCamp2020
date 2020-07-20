// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// routes.get('/users', (request, response) => {
//   const { name, email } = request.body;

//   const user = {
//     name,
//     email,
//   };

//   // return response.json({ message: 'Hello GoStack' });
//   return response.json(user);
// });

routes.use('/appointments', appointmentsRouter);

export default routes;
