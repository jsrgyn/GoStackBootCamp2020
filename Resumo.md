VSC Git: https://imasters.com.br/desenvolvimento/use-git-com-interface-grafica-visual-studio-code-e-aumente-sua-produtividade

https://github.com/159356-1702-Extramural/capstone/wiki/Step-by-Step-Branch-and-Merge-using-VS-Code

##Ambiente de Desenvolvimento

[Node e Yarn]
Instalando Node
Instalar por pacote.
Wind. por chocalate.

Instalando Yarn
https://classic.yarnpkg.com/en/docs/install#windows-stable
Para ver versão
yarn -v

[Escrita de Código]
Terminal Oh My Zsh é Linux e Mac.

[Git/Github]
ver versão: git --version
Apos instalar o git fazer o processo setup. https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

[Extensões]
--JSON Viewer=Ver ver o JSON formatado no chrome.
Confirgurar o thema dracula
--React Dev Tools=Para ver as extrutura dos compotentes do react no inspecinar elemento.
--Octotree=Navegar nas extrutura do repositorio git.

[Ferramentas]
--Notion=Aplicativo de notas https://www.notion.so
--Whimsical=Para fluxograma; Fluxo aplicação
--DevDocs=Centralizador de Documentação das tecnologia (Html; JavaScript; etc...)
--Insomnia ou postman= Fazer requisições da API;

##Nível 01
@Back-end com Node.js
--Conceitos NodeJS
Frameworks
ExpressJS outros AdonisJS ou NestJS
--Conceitos API REST
GET http://minhaapi.com/users
POST http://minhaapi.com/users
PUT http://minhaapi.com/users/1
DELETE http://minhaapi.com/users/1
Método HTTP
Recurso/Rota
Parâmetro
GET http://api.com/company/1/users?page=2
Route
Route Params
Query Params
POST http://api.com/company/1/users
Body (Apenas POST/PUT) = Para não poluir a URL
Headers. {"Locate": "pt_BR"}
HTTP codes
*1xx: Informational
*2xx: Success
200: Success
201: Created
*3xx: Readirection
301: Moved Permanently
302: Moved
*4XX: Client Error
400: Bad Request
401: Unauthorized
404: Not Found
+5xx: Server Error
500: Internal Server Error
--Criando projeto Node
yarn init -y
yarn add express
node .\src\index.js --execultado a aplicação.
http://localhost:3333/projects
--Configurando Nodemon
yarn add nodemon -D
Executando o nodemon
yarn nodemon src/index.js
Editando o packge.json
o main para "src/index.js"
e tag scripts: { "dev": "nodemon src/index.js"} e com main editado apenas scripts: { "dev": "nodemon"} e ele busca o restante do comando no main. e comando agora fica sendo apenas "yarn dev"
Para incluir emoji no wind é "Wind+." no mac "comand+contr+space"
--Métodos HTTP

- GET: Buscar informações do back-end
- POST: Criar uma informação no back-end
- PUT/PATCH: Alterar uma informação no back-end
- PUT: Alterar toda informação
- PATCH: Alterar um informação especifica.
- DELETE: Deletar uma informação no back-end

--Utilizando o Insomnia
Codigo de font aberto: https://github.com/Kong/insomnia e desenvolvido com elctronjs https://www.electronjs.org/apps/insomnia
Só funciona com 64bit.
Duas alternativa: Postman ou https://postwoman.io/pt-br
instalando o thema do dracula no Insomnia: https://draculatheme.com/insomnia/
Comando git clone https://github.com/dracula/insomnia.git C:\Users\Johnathan\insomnia-dracula ou pelo mac git clone https://github.com/dracula/insomnia.git ~\insomnia-dracula

Manage Environments: dev {
"base_url": "http://localhost:3333"
} e as url: {{ base_url  }}/projects/1

--Tipos de Parâmetros

- Query Params: Filtros e paginação
- Exemplo: http://localhost:3333/projects?title=React&owner=Diego
- Route Params: Identificar recursos (Atualizar/Deletar);
- Exemplo: http://localhost:3333/projects/1
- Request Body: Conteúdo na hora criar ou editar um recurso. (JSON)
  --Aplicação Funcional
  yarn add uuidv4 => Cria um unique id universal
  --Middlewares
  Interceptador de requisições que interromper totalmente a requisição ou alterar dados da requisição.
  //Middleware
  function validadeProjectId(request, response, next)
