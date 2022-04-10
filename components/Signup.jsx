import React from "react";
import Container from "./Container";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useState } from "react";

function Signup({ updateComponent }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleChange(e){
    console.log(e.target.name)
    switch(e.target.name){
      case "name" : {
        setname(e.target.value) 
        break
      } 
      case "email" : {
        setemail(e.target.value) 
        break
      } 
      case "password" : {
        setpassword(e.target.value) 
        break
      } 
    }
  }

  async function handlSubmit(e){
    e.preventDefault();
    if(!(name && email && password)){
      console.log('Something is missing')
    }else{
      const rawResponse = await fetch('/api/registerUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      const content = await rawResponse.json();
      console.log(content)
    }
  }

  return (
    <section className="py-8">
      <Container>
        <h4 className="text-4xl  font-extrabold text-center p-6 ">Signup</h4>
        <form className="max-w-md mx-auto" onSubmit={handlSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              value={name}
              name="name"
              onChange={handleChange}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              value={email}
              name="email"
              onChange={handleChange}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
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
            <input
              value={password}
              name="password"
              onChange={handleChange}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          {/* <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
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
            Sign Up With Google
          </div>

          <div className="py-4">
            Already a Member?{" "}
            <button
              onClick={() => updateComponent("login")}
              className="font-bold text-center"
            >
              {" "}
              Sign In Here
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Signup;
