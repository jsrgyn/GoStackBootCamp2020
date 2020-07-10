// import React from "react";
import React, { useState } from "react";

import "./App.css";

import backgroundImage from "./assets/background.jpeg";

import Header from "./components/Header";

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  // return <h1>Hello GoStack</h1>;
  // return <Header />;
  // const projects = ["Desenvolvimento de app", "Front-end web"];

  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  /***
   * useState retorna um array com 2 posições
   *
   * 1. Variável com o seu valor inicial
   * 2. Função para atualizarmos esse valor.
   *
   */

  function hendleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    // <div>
    //   <Header />
    //   <Header />
    // </div>
    // <>
    //   <Header />
    //   <Header />
    // </>

    <>
      {/* <Header title="Homepage" />
      <Header title="Projects" /> */}
      {/* <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header> */}

      <Header title="Projects" />

      <img width={400} src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          // <li>{project}</li>
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={hendleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
