import Form from './components/Form'
import './App.css';
import React from "react";
import MyComponent from "./components/MyComponent";

function App() {
  const [state, setState] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      edad: "",
  });

  return (
    
    <div className="App">
      <Form state={state} setState={setState} />
      <div style={{ justifyContent: "end", display: "flex", flexDirection: "column", alignItems: "end" }}> 
        <MyComponent movies={["Inception", "Interstellar", "Dunkirk", "Avatar", "Armageddon", "Efecto Mariposa"]} />
      </div>
    </div>
    
  );
}

export default App;
