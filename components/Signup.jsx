import React from "react";
import Container from "./Container";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Toast from "./Toast";
  
function Signup({ updateComponent }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState('')

  function togglePasswordVisibility(e) {
    console.log(passwordVisibility);
    passwordVisibility
      ? setPasswordVisibility(false)
      : setPasswordVisibility(true);
  }

  function handleChange(e) {
    console.log(e.target.name);
    switch (e.target.name) {
      case "name": {
        setname(e.target.value);
        break;
      }
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
    setloading(true);
    if (!(name && email && password)) {
      console.log("Something is missing");
    } else {
      const rawResponse = await fetch("/api/registerUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const response = await rawResponse.json();
      if (response.success) {
        setmessage({type:'success' , content:'Registered Successfully😁' })
        setTimeout(()=>{
          setmessage('')
          updateComponent("login")
        },2000)
        // alert("Registered Successfully");
      } else {
        setmessage({type:'error' , content:response.err.message.split(":")[2]})
        setTimeout(()=>{
          setmessage('')
        },2000)
        // alert(response.err.message.split(":")[2]);
      }
    }

    setloading(false);
    setname("");
    setemail("");
    setpassword("");
  }

  return (
    <section className="py-8">
      <Container>

        {message && <Toast message={message.content} type={message.type} />}

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
              className="dark:bg-gray-600 dark:text-gray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
              className="dark:bg-gray-600 dark:text-gray-300 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                type={passwordVisibility ? "text" : "password"}
                id="password"
                className="dark:bg-gray-600 dark:text-gray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
              <div
                onClick={() => togglePasswordVisibility()}
                className="absolute rounded-lg right-0 top-0 px-2 py-1 bg-gray-100 dark:bg-gray-600 border-2 flex flex-col justify-center min-h-[100%] cursor-pointer"
              >
                {passwordVisibility ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>
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
            className=" flex justify-center items-center gap-2 text-primaryaccent bg-darknight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
          >
            Submit
            <div className={`spinner ${loading == true ? "" : "hidden"}  `}>
              <svg
                role="status"
                className="mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                ></path>
              </svg>
            </div>
          </button>

          <div className="flex py-2 border-2 mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600  cursor-pointer items-center gap-4 justify-center shadow-xl">
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
