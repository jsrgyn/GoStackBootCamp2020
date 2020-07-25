import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<user> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    //user.password - Senha criptografada
    //password - Senha não-criptografada.
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    // Usuário autenticado
    /**
     * Parametros
     * 1ª Informações extras, exemplo: Permissão do usuário e etc...
     * 2ª Chave secreta: Site para gerar: http://www.md5.cz/ "fdkdsçlfksdalçkçleeklrekldoed" = --> "a569a2272564c439c6ade76325adeb9c"
     * 3ª Configuração do Token.
     */
    // experiência / segurança... Estudar "strategy refresh token" (site: https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

    // const token = sign({}, 'a569a2272564c439c6ade76325adeb9c', {
    //   subject: user.id,
    //   expiresIn: '1d',
    // });

    // const token = sign({}, authConfig.jwt.secret, {
    //   subject: user.id,
    //   expiresIn: authConfig.jwt.expiresIn,
    // });

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
