import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

// const App: React.FC = () => <h1>Hello World</h1>;
const App: React.FC = () => (
  <>
    {/* <h1>Hello World</h1> */}
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
