
import React, { useState } from "react";
import Input from "./Input";

function Register (){
  const [isMouseOver, setMouseOver] = useState(false)

function mouseOver(){
  setMouseOver(true)
}
function mouseOut(){
  setMouseOver(false)
}
  return (
    <form className="register-form">
    <Input type="text" placeholder="First Name"/>
    <Input type="text" placeholder="Last Name"/>
    <Input type="text" placeholder="Email Address"/>
    <Input type="Password" placeholder="Password"/>
    <button type="Submit"
    style={{backgroundColor: isMouseOver ? "black" : "white"}} 
    onMouseOver={mouseOver}
    onMouseOut={mouseOut}>
      Register</button>
    </form>
  );
}
export default Register;