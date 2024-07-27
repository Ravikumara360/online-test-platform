// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;



import React, { useState } from 'react';
import Login from './components/Login';
import TestCreation from './components/TestCreation';
import TestTaking from './components/TestTaking';
import Mcq from './components/Mcq';


function App() {
  const [user, setUser] = useState(null);
  const [testId, setTestId] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Login setUser={setUser} />
      ) : testId === null ? (
        <TestCreation setTestId={setTestId} />
      ) : (
        <TestTaking testId={testId} />
     )}
    </div>
  );
}

export default App;




