import React from "react";
import Register from "./components/Register";


function App (){
  return(
    <div>
      <h1 className="welcome-greetings">Welcome to Nique Todolist</h1>
      <div className="register">
      <Register/>
      </div>
    </div>
  );
}

export default App;