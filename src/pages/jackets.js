import React,{useState} from 'react'
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Jackets(props) {
  const jacketsData = JSON.parse(localStorage.getItem("jackets"))
  const navigate = useNavigate()
  const options1 = { style: 'currency', currency: 'IDR' };
  const numberFormat1 = new Intl.NumberFormat('id-ID', options1);
  
  const handleClick = (e, list) => {
    e.preventDefault()
    const selected = jacketsData.filter(product => product.id === list.id ? list : null)
    localStorage.setItem("detail", JSON.stringify(selected))
    navigate("/detail")
  }
  console.log('reducers =>', props);
  
  
  return (
    
    <div className="w-full h-[calc(100vh-64px)] flex flex-col justify-start items-center">
        <p className='text-4xl font-bold mt-6'>Jackets</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 my-10">
          {jacketsData && jacketsData.map( item => <div onClick={(e) => handleClick(e, item)} key={item.id} className="lg:h-[350px] lg:w-64 h-[250px] w-[200px]  shadow-2xl border-2 border-neutral-300 rounded-xl overflow-hidden hover:cursor-pointer">
            <div className="lg:h-64 lg:w-64 h-[190px] w-[200px] bg-neutral-300  overflow-hidden">
            <img src={item.color[0].pict[0].url} alt="" />
            </div>
            <div className="lg:h-24 lg:w-64 flex flex-col justify-center ml-3">
            <p className="lg:mb-2 mb-0 font-bold lg:text-2xl text-lg">{item.name}</p>
            <p className='lg:text-base text-sm' >{numberFormat1.format(item.price)}</p>
            </div>
        </div> )}
            
        </div>
    </div>
  )
}

export default connect(state => state)(Jackets)