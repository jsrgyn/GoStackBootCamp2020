import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

/**
 * Repositories
 * Services
 */

// {
// 	"name": "Diego Fernandes",
// 	"email": "diego@rocketseat.com.br",
// 	"password": "123456"
// }

// Token: "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTU2MjQ4NzYsImV4cCI6MTU5NTcxMTI3Niwic3ViIjoiYTlkZTdiN2ItNmM3Ny00YjU4LWFhODItMmZhYjUwMzU5MDYzIn0.RE9Rt2Fetn57O4rr5jHewmsWoeeR_i90JyzUp6O47cQ"

usersRouter.post('/', async (request, response) => {
  // try {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
  // } catch (err) {
  //   return response.status(400).json({ error: err.message });
  // }
});

// Atualizando uma unica informação do usuário: patch
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    // return response.json({ ok: true });
    // try {
    console.log(request.file);

    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    console.log(request.file.filename);

    delete user.password;

    // return response.json({ ok: true });
    return response.json(user);
    // } catch (err) {
    //   return response.status(400).json({ error: err.message });
    // }
  },
);

export default usersRouter;
