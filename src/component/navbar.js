import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../utils/axios";
import { useDispatch, connect } from "react-redux";
import {
  jacketsProduct,
  shirtsProduct,
  pantsProduct,
  getShoppingCarts,
  getProduct,
} from "../redux/action";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Menuhamburger from "./menuhamburger";


function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState([]);
  const [inputField, setInputField] = useState("");
  const [menuDropdown, setMenuDropdown] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const options1 = { style: "currency", currency: "IDR" };
  const numberFormat1 = new Intl.NumberFormat("id-ID", options1);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getShoppingCarts());
  }, []);

  const handleHome = () => {
    setDropdown(false);
    setMenuDropdown(false)
    navigate("/");
  };
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
    setMenuDropdown(false)
  }
  function localShirts(data) {
    localStorage.setItem("shirts", JSON.stringify(data));
    const shirts = JSON.parse(localStorage.getItem("shirts"));
    dispatch(shirtsProduct(shirts));
    setDropdown(!dropdown);
    setMenuDropdown(false)
  }
  function localPants(data) {
    localStorage.setItem("pants", JSON.stringify(data));
    const pants = JSON.parse(localStorage.getItem("pants"));
    dispatch(pantsProduct(pants));
    setDropdown(!dropdown);
    setMenuDropdown(false)
  }

  // const handleNewArrival = () => {
  //   setDropdown(false)
  //   navigate('newArrival')
  // }

  const searchFilter = (e) => {
    const searchWords = e.target.value;
    setInputField(searchWords);
    const newFilter = props.listReducers.list.filter((product) => {
      return product.name.toLowerCase().includes(searchWords.toLowerCase());
    });

    if (searchWords === "") {
      setSearchTerm([]);
    } else {
      setSearchTerm(newFilter);
    }
  };

  const handleClickSearch = (item) => {
    localStorage.setItem("detail", JSON.stringify([item]));
    setInputField("");
    setSearchTerm([]);
    navigate("/detail");
    window.location.reload();
  };

  const handleClickResult = (e) => {
    e.preventDefault();
    localStorage.setItem("seachResult", JSON.stringify(searchTerm));
    setInputField("");
    setSearchTerm([]);
    navigate("/searchresult");
    window.location.reload();
  };

  const logOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    window.location.reload()
  };
  const shoppingCart = () => {
    setDropdown(false)
    setMenuDropdown(false)
    navigate("/shoppingcart")
  }
  const login = () => {
    setDropdown(false)
    setMenuDropdown(false)
    navigate('/login')
  }
  const signup = () => {
    setDropdown(false)
    setMenuDropdown(false)
    navigate('/signup')
  }
  console.log("reducersCart", props);

  return (
    <div className="w-full h-12 bg-navbar flex items-center sm:px-0 px-2 justify-between shadow-lg shadow-button/[15%] relative z-10">
      <p onClick={() => handleHome()} className="font-bold xl:text-2xl sm:hidden sm:pl-6 text-base text-button hover:cursor-pointer">TC</p>
      <h1
        onClick={() => handleHome()}
        className="sm:inline hidden font-bold xl:text-2xl  lg:text-lg sm:text-base sm:pl-6 text-xs text-button hover:cursor-pointer"
      >
        Tira Commerce
      </h1>
      <div className="flex ">
        {/* <p
          onClick={() => handleNewArrival()}
          className=" ml-6 text-red-600 text-sm hover:cursor-pointer"
        >
          New Arrival
        </p> */}
        <div className="sm:inline hidden">
          <p
            className="text-white  sm:text-sm text-xs hover:cursor-pointer flex"
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
      </div>
      <form
        onSubmit={(e) => handleClickResult(e)}
        className="flex items-center"
      >
        <input
          className="rounded-tl-lg rounded-bl-lg xl:w-[500px] lg:w-[400px] sm:w-[100px] w-[150px] h-7 px-3 py-2"
          type="text"
          placeholder="Search Product . . ."
          onChange={(e) => searchFilter(e)}
          value={inputField}
        />
        {searchTerm.length != 0 && (
          <div className=" absolute flex flex-col items-center space-y-3 top-10  p-2 bg-white border-2 border-slate-300">
            {searchTerm.map((items) => (
              <div
                onClick={() => handleClickSearch(items)}
                className="flex lg:flex-row flex-col xl:w-[480px] xl:h-[120px] lg:w-[380px] lg:h-[120px] w-[100px] h-[180px]  hover:bg-neutral-400 hover:rounded-lg hover:cursor-pointer "
              >
                <div className=" h-[120px] w-[100px] bg-neutral-400 overflow-hidden rounded-lg">
                  <img src={items.color[0].pict[0].url} alt="" />
                </div>
                <div className="flex flex-col lg:justify-evenly  lg:ml-2 ml-0">
                  <p className="font-bold">{items.name}</p>
                  <p className="flex">{numberFormat1.format(items.price)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button>
          <FiSearch className="rounded-tr-lg rounded-br-lg  bg-button sm:w-6 xl:w-14 sm:h-7 w-7 h-7" />
        </button>
      </form>

      <div
        onClick={() => shoppingCart()}
        className="flex  items-center hover:cursor-pointer"
      >
        {props.getCartsReducers.getCartResult.length ? (
          <div className="sm:h-5 sm:w-5 h-4 w-4 bg-red-700 rounded-full flex justify-center items-start">
            <p className="text-white sm:text-sm text-xs">
              {props.getCartsReducers.getCartResult.length}
            </p>
          </div>
        ) : null}

        <FiShoppingCart
          className="sm:w-[25px] sm:h-[25px] w-[15px] h-[15px]"
          color="white"
          title="CART"
        />
      </div>
      <div className="relative">

        <div onClick={() => setMenuDropdown(!menuDropdown)} className="text-white sm:hidden">
          {menuDropdown ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
        {menuDropdown ? <div className="absolute right-0">
          <Menuhamburger menuDropdown={menuDropdown} setMenuDropdown={setMenuDropdown}/>
        </div> : null }
        
      </div>
      {auth.currentUser && auth.currentUser.email ? (
        <div className="sm:flex justify-center items-center pr-6 hidden">
          <p className="text-white">{auth.currentUser.email}</p>
          <button
            onClick={(e) => logOut(e)}
            className="h-7 w-16 items-center bg-button rounded-md ml-4"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="sm:flex justify-center items-center pr-6 hidden">
          <button className="h-7 w-16 items-center border-2 border-white rounded-md">
            <p onClick={() => login()} className="text-white text-sm">
              Log in
            </p>
          </button>
          <button className="h-7 w-16 items-center bg-button rounded-md ml-4">
            <p
              onClick={() => signup()}
              className="text-black text-sm"
            >
              Sign up
            </p>{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default connect((state) => state)(Navbar);
