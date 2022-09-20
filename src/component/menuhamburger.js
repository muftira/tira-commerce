import React,{useState, useEffect} from 'react'
import { getCategory } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import {
    jacketsProduct,
    shirtsProduct,
    pantsProduct
  } from "../redux/action";
import { RiArrowDownSFill } from "react-icons/ri";
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";

function Menuhamburger({menuDropdown, setMenuDropdown}) {
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleJackets = () => {
        const choseCategory = "Jackets";
        getCategory(choseCategory)
          .then((res) => localJackets(res.data), navigate(choseCategory))
          .catch((error) => console.log("GAGAL =>", error));
      };
      const handleShirts = () => {
        const choseCategory = "Shirts";
        getCategory(choseCategory)
          .then((res) => localShirts(res.data), navigate(choseCategory))
          .catch((error) => console.log("GAGAL =>", error));
      };
      const handlePants = () => {
        const choseCategory = "Pants";
        getCategory(choseCategory)
          .then((res) => localPants(res.data), navigate(choseCategory))
          .catch((error) => console.log("GAGAL =>", error));
      };

      function localJackets(data) {
        localStorage.setItem("jackets", JSON.stringify(data));
        const jackets = JSON.parse(localStorage.getItem("jackets"));
        dispatch(jacketsProduct(jackets));
        setDropdown(!dropdown);
        setMenuDropdown(!menuDropdown)
      }
      function localShirts(data) {
        localStorage.setItem("shirts", JSON.stringify(data));
        const shirts = JSON.parse(localStorage.getItem("shirts"));
        dispatch(shirtsProduct(shirts));
        setDropdown(!dropdown);
        setMenuDropdown(!menuDropdown)
      }
      function localPants(data) {
        localStorage.setItem("pants", JSON.stringify(data));
        const pants = JSON.parse(localStorage.getItem("pants"));
        dispatch(pantsProduct(pants));
        setDropdown(!dropdown);
        setMenuDropdown(!menuDropdown)
      }

      const login = () => {
        navigate("/login")
        setMenuDropdown(!menuDropdown)
      }

      const signup = () => {
        navigate("/signup")
        setMenuDropdown(!menuDropdown)
      }

      const logout = () => {
        signOut(auth)
        setDropdown(!dropdown);
        setMenuDropdown(!menuDropdown)
      } 

  return (
    <div className='w-[120px] h-[150px] sm:hidden flex flex-col justify-center items-center bg-white border border-neutral-400 rounded-md pt-4 mt-2'>
        <div>
          <p
            className="text-black  sm:text-sm text-xs hover:cursor-pointer flex"
            onClick={() => setDropdown(!dropdown)}
          >
            Category
            <RiArrowDownSFill className="mt-1" />
          </p>
          <div>
            {dropdown ? (
              <ul className="absolute h-24 w-24 bg-white border-2 border-slate-200 rounded-md shadow-lg flex flex-col justify-evenly px-1 text-sm ml-2">
                <li
                  onClick={() => handleJackets()}
                  className="hover:flex hover:items-center hover:w-full hover:h-8 hover:bg-navbar hover:rounded-md hover:text-white hover:p-1 hover:cursor-pointer"
                >
                  Jackets
                </li>
                <li
                  onClick={() => handleShirts()}
                  className="hover:flex hover:items-center hover:w-full hover:h-8 hover:bg-navbar hover:rounded-md hover:text-white hover:p-1 hover:cursor-pointer"
                >
                  Shirts
                </li>
                <li
                  onClick={() => handlePants()}
                  className="hover:flex hover:items-center hover:w-full hover:h-8 hover:bg-navbar hover:rounded-md hover:text-white hover:p-1 hover:cursor-pointer"
                >
                  Pants
                </li>
              </ul>
            ) : null}
          </div>
        </div>
        {auth.currentUser && auth.currentUser?.email ? <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
                <p className='text-[9px]'>
            {auth.currentUser && auth.currentUser.email}
          </p>
          <button onClick={() => logout()} className="h-7 w-16 items-center bg-button rounded-md">
            Signout
          </button>
        </div> : <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
        <button className="h-7 w-16 items-center border-2 border-black rounded-md">
            <p onClick={() => login()} className="text-black text-sm">
              Log in
            </p>
          </button>
          <button className="h-7 w-16 items-center bg-button rounded-md">
            <p
              onClick={() => signup()}
              className="text-black text-sm"
            >
              Sign up
            </p>{" "}
          </button>
        </div>}
        
        
        
          
    </div>
  )
}

export default Menuhamburger