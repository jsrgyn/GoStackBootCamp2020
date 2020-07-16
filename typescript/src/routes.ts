import { Request, Response } from "express";

import createUser from "./services/CreateUser";

//String, number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response) {
  // const user = createUser("Diego", "diego@rocketseat.com.br", "123456");
  const user = createUser({
    email: "diego@rocketseat.com.br",
    password: "123456",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  console.log(user.name);

  return response.json({ message: "Hello World" });
}
