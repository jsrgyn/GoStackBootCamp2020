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
Parei no configurando Nodemon.
--Configurando Nodemon
--Métodos HTTP
--Utilizando o Insomnia
--Tipos de Parâmetros
--Aplicação Funcional
--Middlewares
