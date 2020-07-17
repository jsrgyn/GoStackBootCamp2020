// src/routes/index.ts
import { Router, request, response } from 'express';
const routes = Router();

routes.get('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  // return response.json({ message: 'Hello GoStack' });
  return response.json(user);
});

export default routes;
