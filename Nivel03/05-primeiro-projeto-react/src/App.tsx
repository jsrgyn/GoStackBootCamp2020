import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// function App() {
// const App: React.FC = () => <Routes />;
const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
// {
//   return <Routes />;
// };
// return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
// <h1>Hello World</h1>
// );
// return <Routes />;
// }

export default App;
