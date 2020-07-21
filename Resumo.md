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

  @Front-end com ReactJS
  --Conceitos ReactJS
  O que é React?
  *Biblioteca para construção de interfaces;
  *Utilizado para construção de Single-Page Applications;
  *Podemos chamar de framework?
  *Tudo fica dentro do Javascript;
  \*React/ReactJS / React Native;
  Exemplo do react
  [
  import React from 'react';

      import './button.css';
      import icon from './button.png'

      function Button() {
        return (
          <button>
            <img src={icon} />
          </button>
        );
      }

  ]
  Vantagens
  *Organização do código;
  *Componentização;
  *Divisão de responsabilidades;
  *Back-end: Regra de negócio
  *Front-end: Interface
  *Uma API, múltiplos clientes;
  *Back-end --> Web --> Mobile;
  *Programação declarativa;

  JSX
  *Escrever HTML dentro do JavaScript;
  *Com React podemos criar nossos próprios elementos;

  Exemplo sem JSX
  [
  //Antes
  function Button() {
  return React.createElement(
  'button',
  {React.createElement(
  'span',
  {class: 'icon'}
  )
  )
  }
  <button type="button">
  <span class="icon"></span>
  </button>
  ]
  Exemplo com JSX
  [
  //Com JSX
  function Button() {
  return (
  <button type="button">
  <span class="icon"></span>
  </button>
  )
  }
  ]

  //Nossos próprios elementos
  //(componentes)
  function Header() {
  return <Button />
  }

  Programação Imperativo vc declarativo
  Exemplo Imperativo
  [
  const notificacoes = 0;
  function montaBadge(num) {
  if (notificacoes === 0 && num > 0) {
  // Adiciona badge
  // container.appendChild(badge)...
  }

      if (notificacoes !== 0 && num > 0) {
        // Apenas muda o número
        // badge.innerHTML = num...
      }

      if (notificacoes !== 0 && num === 0) {
        //Remove badge
        // container.removeChild(badge)
      }

  }
  ]

  Exemplo Declarativo
  [
  //Não comparamos com o estado anterior

  function Badge({ num }) {
  return (
  <div id="container">
  { num > 0 && <div id="badge">{num}</div>}
  <span class="icon"></span>
  </div>
  );
  }
  ]

  Babel/Webpack
  *O browser não entende todo esse código;
  *O Babel converte o código JS de uma forma que o browser entenda;
  *O Webpack possui várias funções:
  *Criação do bundle, arquivo com todo código da aplicação;
  \*Ensinar ao JavaScript com importar arquivos CSS, imagens e etc;
  Live reload com Webpack Dev Server;

--Configurando Babel
Ouviu falar do "create-react-app";
yarn init -y na pasta frontend;
yarn add react react-dom
São dois pacote um react e outro react-dom (web) e react-native (mobile);

Babel: Converter (transpilar) código do React para um código que o browser entenda.
Webpack: Pra cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente.

É do Webpack os: Loaders: babel-loader, css-loader, image-loader, file-loader

yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

https://babeljs.io/docs/en/configuration

yarn add @babel/cli
yarn babel .\src\index.js --out-file .\public\bundle.js

--Configurando Webpack
yarn add babel-loader
yarn webpack --mode development
yarn add webpack-dev-server -D
yarn webpack-dev-server --mode development

/\*\*

- Babel: Converter (transpilar) código do React para um código que o browser entenda.
- Webpack: Pra cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente.
- -É do Webpack os: Loaders: babel-loader, css-loader, image-loader, file-loader

--Componentização
JSX: HTML dentro do JavaScript (Javascript XML)

--Propriedades

--Estado de Imutabilidade

--Importando CSS e imagens
yarn add style-loader css-loader
yarn dev
yarn add file-loader
https://unsplash.com/

--Listando Projetos da API
yarn add axios
yarn add cors [back-end]

--Cadastrando Projetos
yarn add @babel/plugin-transform-runtime -D

@Mobile com React Native
--Arquitetura React Native
O que é React Native?
*Versão do React para desenvolvimento mobile;
*Multiplataforma;
*Podemos manipular cada plataforma de forma diferente;
*Interface nativa ou híbrida?
*Código não é transpilado;
*Outras plataformas migrando, Microsoft com Windows;
Arquitetura
JS --> Metro Bundler (packager) --> Bundle --> Bridge --> IOS ou Android;
Sintaxe
A declaração de componentes é igual ao web;
Não usamos HTML e sim componentes próprios;
Aplicamos estilo sem classes ou ID's;
Todo texto é <Text/> não existe estilização própria;
O que é Expo? Vamos Usar?
*SDK com um conjunto funcionalidades prontas para usar (câmera, vídeo, integrações);
*Não é necessários configurar emulador;

Por que não vamos utilizar?
\*Limitação sobre o controle do código nativo;
Várias bibliotecas não tem suporte para o Expo;
O Expo liberou seu conjunto de ferramentas prontas para serem utilizadas com projetos que não utilizam Expo;
--Configurando SDK
https://react-native.rocketseat.dev/
--Criando novo projeto
npm install -g react-native-cli
react-native init mobile
Run instructions for iOS:
• cd "C:\Cursos\www\GoStackBootCamp2020\mobile" && npx react-native run-ios - or -
• Open mobile\ios\mobile.xcodeproj in Xcode or run "xed -b ios"
• Hit the Run button

Run instructions for Android:
• Have an Android emulator running (quickest way to get started), or a device connected.
• cd "C:\Cursos\www\GoStackBootCamp2020\mobile" && npx react-native run-android

Run instructions for Windows and macOS:
• See https://aka.ms/ReactNative for the latest up-to-date instructions.

Em um terminal "npm start"

Em outro terminal "npx react-native run-android"
--Diferenças do ReactJS

- Não possuem valor semântico (significado)
- Não possuem estilização própria.
- Todos componentes possuem por padrão "display: flex"
-
- View: div, footer, reader, main, aside, section...
- Text: p, span, strong, h1, h2, h3
  --Listando projetos da API
  yarn add axios

  localhost pelo emulador android "adb reverse tcp:3333 tcp:3333"
  --Criando novos projetos
  @TypeScript
  --Por que Typescript?
  Por que TypeScript?
  --Configurando o projeto
  Configurando um projeto NodeJs
  yarn init -y
  yarn add typescript -D
  yarn add express
  Com os 3 pontinhos "..."
  yarn add -D @types/express
  O comando "node .\src\index.ts" com TypeScript não funciona.
  Agora é "yarn tsc .\src\index.ts".
  Criando a inicialização da configuração TypeScript: yarn tsc --init
  yarn tsc
  node .\src\index.js
  Descomenta do arquivo tsconfig.json a linha: "outDir": "./dist" /_ Redirect output structure to the directory. _/,
  --Quando adicionar tipos
  import { Request, Response } from "express";
  --Tipando objetos e vetores

  --Gria Typescript
  https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36

  ##Nível 02
  @Primeiro projeto com Node.js
  ---Estrutura e padrões  
   --Configurando estrutura
  yarn init -y
  yarn add express
  yarn add typescript -D
  yarn tsc --init
  yarn tsc
  yarn add @types/express -D
  yarn tsc
  node .\dist\server.js
  yarn add ts-node-dev -D
  yarn ts-node-dev src/server.ts
  yarn dev:server
  yarn ts-node-dev --transpile-only src/server.ts [--transpileOnly]
  yarn ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts
  --Padrões de Projeto com Eslint, Prrettier e Editor Config
  https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7
  https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c
  Extensão no VSCode chamada EditorConfig for VS Code
  Selecionar a opção Generate .editorconfig
  .editorconfig com o seguinte conteúdo:
  "
  root = true

  [*]
  indent_style = space
  indent_size = 2
  charset = utf-8
  trim_trailing_whitespace = false
  insert_final_newline = true
  end_of_line = lf
  "
  https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99#c409582eaf2d4407af000437ac25082a
  Instalar a extensão do Eslint no VSCode.
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
  }
  Settings:
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
  },
  yarn add eslint@6.8.0 -D
  yarn eslint --init
  -->To check syntax, find problems and enforce code style
  -->Javascript modules (import/export)
  -->None of these
  -->Yes
  -->Node
  -->Use a popular style guide
  -->Airbnb
  -->JSON
  -->NPM é Yes, Yarn é No.
  yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D
  Criar na raiz do projeto um arquivo .eslintignore
  "
  /\*.js
  node_modules
  dist
  "
  Começar a configuração do arquivo ".eslintrc.json" adicionar dentro de "extends" a linha: "plugin:@typescript-eslint/recommended"
  yarn add eslint-import-resolver-typescript -D
  Logo abaixo das "rules"
  "
  "settings": {
  "import/resolver": {
  "typescript": {}
  }
  }
  "
  Dentro das "rules":
  "
  "import/extensions": [
  "error",
  "ignorePackages",
  {
  "ts": "never"
  }
  ]  
   "
  O arquivo `.eslintrc.json` finalizado com todas as mudanças tem que ficar assim:
  "
  {
  "env": {
  "es2020": true,
  "node": true
  },
  "extends": [
  "airbnb-base",
  "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
  "ecmaVersion": 2018,
  "sourceType": "module"
  },
  "plugins": [
  "@typescript-eslint"
  ],
  "rules": {
  "import/extensions": [
  "error",
  "ignorePackages",
  {
  "ts": "never"
  }
  ]
  },
  "settings": {
  "import/resolver": {
  "typescript": {}
  }
  }
  }

  "
  https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425#da104f9b05964ec1aaac067ab2bf8a54
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

--Debugando Node.JS
// "dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
"dev:server": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
---Construindo Aplicação
--Layout da Aplicação
figma.com/
--Cadastro de Agendamentos
insomnia -> Create New Workspace "GoBarber Bootcamp" new Folder "Appointments"
{{ base_url }}/appointments

yarn add uuidv4
--Validando a data
yarn add date-fns
--Model de Agendamento
--Criando repositórios
// Persistência <--> Repositório <--> Rota
// Repositório: find, create...
--Listando Agendamentos
// SoC: Separation of Concerns (Separação de preocupações)
--Trabalhando com dados
// DTO - Data Transfer Object (Transferindo um objetos de dados);
--Services & SOLID
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta.
Dependency Inversion (SOLID)

- [x] - Recebimento das informações
- [x] - Tratativa de erros/excessões
- [x] - Acesso ao repositório
    DRY: Don't repeat Yourself {Não repita as regras de negocio}
    SOLID:
    Single Responsability Principle
    Dependency Invertion Principle
    --Repositórios, services & patterns
    https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5

@Iniciando back-end do app
---Banco de dados
--Estratégias de abstração
https://node-postgres.com/
http://knexjs.org/
Object Relational Mapping
https://sequelize.org/ (Javascript)
https://typeorm.io/#/ (TypeScript)
--Conceitos Docker
Como funciona?

- Criação de ambientes isolados (container);
- Containers expõe portas para comunicação;
  Principais conceitos.
- Imagem
- Container
- Docker Registry (Docker Hub)
- Dockerfile
  - Receita de uma imagem;

# Partimos de uma imagem existente

FROM node:10

# Definimos a pasta e copiamos o arquivos

WORKDIR /usr/app
COPY . ./

# Instalamos as dependências

RUN yarn

# Qual porta queremos expor?

EXPOSE 3333

# Executamos nossa aplicação

CMD yarn start

--Instalando Docker
https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2
--Criando container do banco
https://hub.docker.com/_/postgres
Para ver as portas disponivel no windows: "netstat -a -b".
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
Para listar as docker execultado: "docker ps"
Para listar todos os container do host: "docker ps -a"
Para ver os logs de um container: "docker logs 5e8194c46a5c" (docker logs + id)
Para parar um container: "docker stop c2ada45c3b9a" (docker stop + id)
Para iniciar um container: "docker start 5e8194c46a5c" (docker start + id)
https://dbeaver.io/ ou https://www.electronjs.org/apps/postbird

--Configurando TypeORM
https://typeorm.io/#/
yarn add typeorm pg
yarn typeorm

--Criando tabela de agendamentos
yarn typeorm
yarn typeorm migration:create -n CreateAppointments
yarn typeorm migration:run
yarn typeorm migration:revert
yarn typeorm migration:show

--Criando model de agendamentos
Desativa duas opções "/_ Experimental Options _/" do arquivo tsconfig.json
Ativar e alterar a opção ""strictPropertyInitialization":" no arquivo tsconfig.json

--Repositório do TypeORM
yarn add reflect-metadata
yarn typeorm migration:revert
yarn typeorm migration:run
Documentação TypeORM: https://typeorm.io/#/repository-api

---Cadastro de Usuários
--Model e migration de usuários
--Relacionamento nos models
--Criação de registros
--Criptografia de senha
---Autenticação
--Conceitos de JWT
--Validando credenciais
--Gerando token JWT
--Rotas autenticadas
---Upload de imgagens
--Upload de arquivos
--Atualizando avatar
--Servindo arquivos estáticos
---Tratando exceções
--Criando classe de erro
--Lidando com erros
