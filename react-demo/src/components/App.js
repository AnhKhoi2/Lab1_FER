/**
 * @author Duong Dinh ANh Khoi - CE171496 - SE1717
 */
// import React, { Component } from "react";

// import "../styles/App.css";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>My React App!</h1>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import HelloWorld from "./HelloWorld"; // Import component HelloWorld

function App() {
  return (
    <div className="App">
      <HelloWorld /> {/* Sử dụng component HelloWorld */}
    </div>
  );
}

export default App;
