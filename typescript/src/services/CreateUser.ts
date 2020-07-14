/**
 * Para criar: name, email, password *
 */

export default function createUser(name, email, password) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
