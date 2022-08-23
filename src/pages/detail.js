import React,{useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCarts } from "../redux/action";

function Detail() {
  const details = JSON.parse(localStorage.getItem("detail"))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedPict, setSelectedPict] = useState(details[0].color[0].pict[0].url)
  const [colorToPict, setColorToPict] = useState(details[0].color[0].name)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedPictUrl, setSelectedPictUrl] = useState('')
  const [notifColor, setNotifColor] = useState('')
  const [notifSize, setNotifSize] = useState('')
  const options1 = { style: 'currency', currency: 'IDR' };
  const numberFormat1 = new Intl.NumberFormat('id-ID', options1);

  useEffect(() => {
    if(colorToPict !== details[0].color[0].name ){
      setSelectedPictUrl(details[0]?.color[1]?.pict[0]?.url)
      setSelectedPict(details[0]?.color[1]?.pict[0]?.url)
    }else{
      setSelectedPictUrl(details[0].color[0].pict[0].url)
      setSelectedPict(details[0].color[0].pict[0].url)
    }
  }, [colorToPict])

  const handleColor = (name) => {
    setColorToPict(name)
    setSelectedColor(name)
  }
  const handleCart = (value, color, size, pictUrl) => {
    if(selectedColor && selectedSize !== ''){
      dispatch(addCarts(value, color, size, pictUrl))
      navigate('/shoppingcart')
    }else{
      setNotifColor('Please Pick Color!')
      setNotifSize('Please Pick Size!')
    }
  }
  console.log(selectedColor, " +", selectedSize );
  
  return (
    <div className="w-screen h-[calc(100vh-64px)] flex  justify-center sm:items-center items-start">
      <div className="flex sm:flex-row flex-col justify-center sm:items-start items-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-4">
        <div className="sm:flex hidden sm:flex-col flex-row justify-center items-center sm:space-y-2 sm:space-x-0 space-x-2 sm:w-0 w-screen sm:mr-6">
          {colorToPict !== details[0].color[0].name ? details[0]?.color[1]?.pict.map(item => <div onClick={() => setSelectedPict(item?.url)} className="w-14 h-14 bg-neutral-500 rounded-lg overflow-hidden hover:cursor-pointer shadow-xl ">
            <img className="h-22" src={item?.url} alt="" />
          </div> ) : details[0]?.color[0]?.pict.map(item => <div onClick={() => setSelectedPict(item?.url)} className="w-14 h-14 bg-neutral-500 rounded-lg overflow-hidden hover:cursor-pointer shadow-xl ">
            <img className="h-22" src={item?.url} alt="" />
          </div> )}
          
        </div>
        <div className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] sm:w-[250px] sm:h-[350px] w-[250px] h-[350px] shadow-xl bg-neutral-400 rounded-2xl overflow-hidden ">
          <img className=" w-[500px]" src={selectedPict} alt="" />
        </div>
        <div className="sm:hidden flex sm:flex-col flex-row justify-center items-center sm:space-y-2 sm:space-x-0 space-x-10 sm:w-0 w-screen sm:mr-6">
          {colorToPict !== details[0].color[0].name ? details[0]?.color[1]?.pict.map(item => <div onClick={() => setSelectedPict(item?.url)} className="w-14 h-14 bg-neutral-500 rounded-lg overflow-hidden hover:cursor-pointer shadow-xl ">
            <img className="h-22" src={item?.url} alt="" />
          </div> ) : details[0]?.color[0]?.pict.map(item => <div onClick={() => setSelectedPict(item?.url)} className="w-14 h-14 bg-neutral-500 rounded-lg overflow-hidden hover:cursor-pointer shadow-xl ">
            <img className="h-22" src={item?.url} alt="" />
          </div> )}
          
        </div>
        <div className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] sm:w-[250px] sm:h-[350px] w-[250px] h-[350px] flex flex-col justify-center border-2 border-neutral-300 shadow-xl rounded-2xl px-5 ">
          <p className="font-bold lg:text-4xl text-3xl mb-4">{details[0].name}</p>
          <p className=" text-xl mb-4">Price : {numberFormat1.format(details[0].price)}</p>
          <p className="mb-4 flex items-center space-x-1 sm:text-sm text-xs">
            Size :
            {details[0].size.map(item => <div onClick={() => setSelectedSize(item.name)} className={`w-5 h-5 flex items-center justify-center border-2 border-neutral-300 rounded-sm ml-1 hover:cursor-pointer hover:bg-button active:bg-yellow-700 ${ selectedSize === item.name? "bg-button" : ""}`}>
              {item.name}
            </div> )}
            
          </p>
          <p className="mb-4 flex items-center space-x-1 sm:text-sm text-xs">
            Color :
            {details[0].color.map(item => <div onClick={() => handleColor(item.name)} className={`px-1 flex items-center justify-center border-2 border-neutral-300 rounded-sm ml-1 cursor-pointer hover:bg-button active:bg-yellow-700 ${selectedColor === item.name ? "bg-button" : ""}`}>
              {item.name}
            </div> )}
            
          </p>
          <p className="sm:text-sm text-xs">Description : </p>
          <p className="xl:w-[450px] xl:h-[200px] lg:w-[350px] lg:h-[150px] w-[200px] h-[100px] border-2 border-neutral-300 lg:mb-4 mb-2 rounded-lg p-2 lg:text-sm text-xs">{details[0].desc}</p>
          <button onClick={() => handleCart(details, selectedColor, selectedSize, selectedPictUrl)} className="xl:w-[450px] xl:h-9 lg:w-[350px] lg:h-7 w-[200px] h-7 bg-button rounded-md hover:bg-yellow-700 lg:text-base sm:text-sm">
            Add to Cart
          </button>
          <div className="flex flex-col justify-center items-center">
            {selectedSize === '' ? <p className="text-red-700">{notifSize}</p>  : null }
            {selectedColor === '' ? <p className="text-red-700">{notifColor}</p>  : null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
