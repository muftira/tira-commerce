import React, {useState} from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  

  onAuthStateChanged(auth, (currentUser) => {
    
  });
  

  const login = async (e) => {
    e.preventDefault()
    try {
      const users = await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
      window.location.reload()
      console.log('user =>', users);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-screen h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="h-[300px] sm:w-[400px]  w-[300px] flex flex-col justify-center  border-2 border-neutral-300 shadow-2xl rounded-2xl p-6">
        <p className="sm:w-[400px] flex justify-center font-bold text-xl sm:ml-[-24px] ml-0">
          LOG IN
        </p>
        <form>
          <p className="text-sm mb-1 mt-4">Email</p>
          <input
            className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-sm mb-1 mt-4 ">Password</p>
          <input
            className="ring-2 ring-neutral-400 rounded-md px-1 py-1 sm:w-[350px] w-[250px] text-sm"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={(e) => login(e)} className="sm:w-[350px] w-[250px] h-9 bg-button rounded-md mt-6 text-sm">
            Log in
          </button>
        </form>
        <p className="text-sm sm:w-[400px] w-[300px] flex justify-center ml-[-24px] mt-4">
          Don't have an Account yet ?{" "}
          <button onClick={() => navigate("/signup")} className="text-red-600 ml-1">Register</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
