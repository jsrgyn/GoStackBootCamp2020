const express = require("express");
// const { uuid } = require("uuidv4");
const { uuid, isUuid } = require("uuidv4");
const { response } = require("express");

const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 *  PUT: Alterar toda informação
 *  PATCH: Alterar um informação especifica.
 * DELETE: Deletar uma informação no back-end
 *
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: Filtros e paginação
 *  Exemplo: http://localhost:3333/projects?title=React&owner=Diego
 * Route Params: Identificar recursos (Atualizar/Deletar);
 *  Exemplo: http://localhost:3333/projects/1
 * Request Body: Conteúdo na hora criar ou editar um recurso. (JSON)
 *
 */

/**
 * Middleware
 *
 *Interceptador de requisições que interromper totalmente a requisição ou alterar dados da requisição.
 *
 *
 */

//Configurando o express para receber JSON e identificar.
app.use(express.json());

const projects = [];

//Middleware
function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);
  console.log("1");

  console.time(logLabel);

  // return next();
  next();

  console.log("2");
  console.timeEnd(logLabel);
}

//Middleware
function validadeProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID." });
  }

  return next();
}

app.use(logRequests);
app.use("/projects/:id", validadeProjectId);

app.get("/projects", (request, response) => {
  // app.get("/projects", logRequests, (request, response) => {
  // return response.send("Hello world");
  // const query = request.query;

  console.log("3");

  const { title, owner } = request.query;

  // // console.log(query);
  console.log(title, owner);
  console.log(owner);

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  // return response.json(["Projeto 1", "Projeto 2"]);
  // return response.json(projects);
  return response.json(results);
});

app.post("/projects", (request, response) => {
  // const body = request.body;
  const { title, owner } = request.body;

  // console.log(body);

  console.log(title);
  console.log("Owner: ", owner);

  const project = { id: uuid(), title, owner };

  projects.push(project);

  // return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
  return response.json(projects);
});

// app.put("/projects/:id", (request, response) => {
// app.put("/projects/:id", validadeProjectId, (request, response) => {
app.put("/projects/:id", (request, response) => {
  // const params = request.params;
  const { id } = request.params;
  const { title, owner } = request.body;

  // console.log(params);

  console.log(id);

  // return response.json(["Projeto 4", "Projeto 2", "Projeto 3"]);

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    // return response.json({ error: "Project not found." });
    return response.status(400).json({ error: "Project not found." });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.patch("/projects/:id", (request, response) => {
  return response.json(["Projeto 1", "Projeto 5", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  // app.delete("/projects/:id", validadeProjectId, (request, response) => {
  // return response.json(["Projeto 2", "Projeto 3"]);
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found." });
  }

  projects.splice(projectIndex, 1);

  // return response.send();
  return response.status(204).send();
});

app.get("/projectsJSON", (request, response) => {
  return response.json({ message: "Hello world" });
});

// app.listen("3333");
app.listen("3333", () => {
  console.log("Back-end started!");
  console.log("Como emoji 🚀");
});
