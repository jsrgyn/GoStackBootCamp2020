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
Parei em 1:40 minuto
--Criando novo projeto
--Diferenças do ReactJS
--Listando projetos da API
--Criando novos projetos
