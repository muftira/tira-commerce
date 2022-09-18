import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const register = async (e) => {
    e.preventDefault()
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
      window.location.reload()
      console.log(users);
    } catch (error) {
      console.log(error.message);
    }
    
  }
  
  console.log("auth =>",auth);
  
  
  return (
    <div>
      <div className="w-screen h-[calc(100vh-64px)] flex justify-center items-center">
        <div className="h-[450px] sm:w-[400px] w-[300px]  flex flex-col justify-center  border-2 border-neutral-300 shadow-2xl rounded-2xl p-6">
          <p className="sm:w-[400px] flex justify-center font-bold text-xl ml-[-24px]">
            SIGN UP
          </p>
          <form>
            <p className="text-sm mb-1 mt-4">Full Name</p>
            <input
              className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
              type="text"
              required
            />
            <p className="text-sm mb-1 mt-4">Phone</p>
            <input
              className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
              type="number"
              required
            />
            <p className="text-sm mb-1 mt-4">Email</p>
            <input
              className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <p className="text-sm mb-1 mt-4">Password</p>
            <input
              className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button onClick={(e) => register(e)} className="sm:w-[350px] w-[250px] h-9 bg-button rounded-md mt-6 text-sm ">
              Register
            </button>
          </form>
          <p className="text-sm sm:w-[400px] w-[300px] flex justify-center ml-[-24px] mt-4">
            Have an Account ?{" "}
            <button onClick={() => navigate('/login')} className="text-red-600 ml-1">Log in</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
