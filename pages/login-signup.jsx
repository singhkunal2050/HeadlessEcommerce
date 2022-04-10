import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginSignup() {
  const [page, setPage] = useState("login");

  function updateComponent(componentName){
    setPage(componentName)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return page === "login" ? (
    <Login updateComponent={ updateComponent } />
  ) : (
    <Signup updateComponent={ updateComponent } />
  );
}

export default LoginSignup;
