import React from "react";
import Container from "./Container";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login({ updateComponent }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisibility , setPasswordVisibility] = useState(false)

  function togglePasswordVisibility(e){
    // console.log(passwordVisibility)
    passwordVisibility  ?  setPasswordVisibility(false) : setPasswordVisibility(true)
  }

  function handleChange(e) {
    // console.log(e.target.name);
    switch (e.target.name) {
      case "email": {
        setemail(e.target.value);
        break;
      }
      case "password": {
        setpassword(e.target.value);
        break;
      }
    }
  }

  async function handlSubmit(e) {
    e.preventDefault();
    if (!(email && password)) {
      console.log("Something is missing");
    } else {
      const rawResponse = await fetch("/api/loginUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log(
        JSON.stringify({
          email,
          password,
        })
      );

      const response = await rawResponse.json();
      if (response.success) {
        alert("Logged in Successfully");
      } else {
        alert(response.err.message);
      }
    }
    setemail("");
    setpassword("");
  }

  return (
    <section className="py-8 min-h-[80vh]">
      <Container>
        <h4 className="text-4xl  font-extrabold text-center p-6 ">Login</h4>
        <form onSubmit={handlSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              name="email"
              onChange={handleChange}
              value={email}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <div className="relative">
              <input
                name="password"                
                onChange={handleChange}
                value={password}
                type = { passwordVisibility ? "text" : "password" }
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
              <div onClick={()=>togglePasswordVisibility()} className="absolute rounded-lg right-0 top-0 px-2 py-1 bg-gray-100 border-2 flex flex-col justify-center min-h-[100%] cursor-pointer">
                  {passwordVisibility ?  <IoMdEyeOff/> : <IoMdEye/>}
              </div>
            </div>
          </div>
          {/* <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div> */}
          <button
            type="submit"
            className="text-primaryaccent bg-darknight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
          >
            Submit
          </button>

          <div className="flex py-2 border-2 mt-4 hover:bg-gray-100 cursor-pointer items-center gap-4 justify-center shadow-xl">
            <AiFillGoogleCircle size={50} className="text-darknight" />
            Sign in With Google
          </div>

          <div className="py-4">
            Not a Member?{" "}
            <button
              onClick={() => updateComponent("register")}
              className="font-bold text-center"
            >
              {" "}
              Sign Up Here
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Login;
