import React,{useEffect} from 'react'
import { useDispatch, connect, useSelector } from 'react-redux'
import { newArirvalPants, newArirvalShirts, newArrivalJackets, newArirvalProducts } from '../redux/action'
import { useNavigate } from "react-router-dom";
import Badge from "../img/badge-new.png";

function NewArrival({NewArrivalJacketReducers}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const options1 = { style: 'currency', currency: 'IDR' };
  const numberFormat1 = new Intl.NumberFormat('id-ID', options1);
  const {newJackets} = useSelector((state) => state.NewArrivalJacketReducers)
  const {newShirts} = useSelector((state) => state.NewArrivalShirtReducers)
  const {newPants} = useSelector((state) => state.NewArrivalPantReducers)
  const product = [newJackets, newShirts, newPants]
  localStorage.setItem("newArrival", JSON.stringify(product))
  const newArrivals = JSON.parse(localStorage.getItem("newArrival"))

  useEffect(() => {
    dispatch(newArirvalProducts())
      // dispatch(newArrivalJackets())
      // dispatch(newArirvalShirts())
      // dispatch(newArirvalPants())
    
  }, [])

  const handleDetail = (e, list) => {
    const selectedDetail = NewArrival.filter(item => item.id === list.id ? list : null )
    localStorage.setItem('detail', JSON.stringify(selectedDetail))
    navigate('/detail')
  }
  

  console.log('reducers', product);
  
  
  return (
    <div className="w-screen h-[calc(100vh-64px)] flex flex-col justify-start items-center">
    <p className='text-4xl font-bold mt-10'>New Arrival</p>
    <div className="grid grid-cols-3 gap-8 my-10">
      {newArrivals ? newArrivals.map( items =>  <div onClick={(e) => handleDetail(e, items)} key={items.id} className="h-96 w-72  shadow-2xl border-2 border-neutral-300 rounded-xl overflow-hidden hover:cursor-pointer">
        <div className="h-72 w-72 bg-neutral-300 overflow-hidden">
          {items && <img src={items.color[0].pict[0].url} alt="" /> }
        </div>
        <div className="h-24 w-72 flex flex-col justify-center ml-3 relative">
          <img className='absolute w-10 right-6 top-[-2px] ' src={Badge} alt="" />
          {items && <p className="mb-2 font-bold text-2xl ">{items.name}</p> }
          {items && <p>{numberFormat1.format(items.price)}</p>}
        </div>
    </div>) : null}
        
    </div>
</div>
  )
}

export default connect(state => state)(NewArrival)