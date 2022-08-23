import React,{useState, useEffect} from "react";
import {getApi} from "../utils/axios";
import {useDispatch} from 'react-redux'
import {detailProduct} from '../redux/action'
import { useNavigate } from "react-router-dom";

function Product() {
  const [data, setData] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const options1 = { style: 'currency', currency: 'IDR' };
  const numberFormat1 = new Intl.NumberFormat('id-ID', options1);

  useEffect(() => {
    getApi()
    .then(res => setData(res.data.reverse()))
    .catch(error => console.log('GAGAL =>', error))
  }, [])

const handleDetail= (e, list) => {
  e.preventDefault()
  const _detail = data.filter(product => product.id === list.id ? list : null )
  const detailLocal = localStorage.setItem('detail', JSON.stringify(_detail))
  dispatch(detailProduct(detailLocal))
  navigate("detail")
}
  
  console.log("product =>", data);
  

  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-start ">
      <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 my-10">

      {data && data.map(item => <div onClick={(e) => handleDetail(e, item)} key={item.id} className="lg:h-[350px] lg:w-64 h-[250px] w-[200px]  shadow-2xl border-2 border-neutral-300 rounded-xl overflow-hidden hover:cursor-pointer">
        <div className="lg:h-64 lg:w-64 h-[190px] w-[200px] bg-neutral-300  overflow-hidden">
          <img className="object-cover" src={item.color[0].pict[0].url} alt="" />
        </div>
        <div className="lg:h-24 lg:w-64 flex flex-col justify-center ml-3">
          <div>
           <p className="lg:mb-2 mb-0 font-bold lg:text-2xl text-lg" >{item.name}</p>
          </div>
          <p className="lg:text-base text-sm">{numberFormat1.format(item.price)}</p>
        </div>
      </div> )}
      </div>
      
    </div>
  );
}

export default Product;
