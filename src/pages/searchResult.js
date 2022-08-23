import React from 'react'
import { useNavigate } from "react-router-dom";

function SearchResult() {
  const result = JSON.parse(localStorage.getItem('seachResult'))
  const navigate = useNavigate()
  const options1 = { style: 'currency', currency: 'IDR' };
  const numberFormat1 = new Intl.NumberFormat('id-ID', options1);

  const handleClickDetail = (item) => {
    localStorage.setItem('detail',JSON.stringify([item]))
    navigate('/detail')
  }

  return (
    <div className="w-screen h-[calc(100vh-64px)] flex flex-col justify-start items-center">
      <p className='text-4xl font-bold mt-10'>Search Result</p>
      {result.length != 0 ? <div className={result.length === 1 ? "grid sm:grid-cols-1 grid-cols-1 lg:gap-8 gap-4 my-10" : result.length === 2 ? "grid sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 my-10" : "grid sm:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 my-10" }>
      {result && result.map(items => <div>
          <div onClick={() => handleClickDetail(items)}  className="lg:h-[350px] lg:w-64 h-[250px] w-[200px]  shadow-2xl border-2 border-neutral-300 rounded-xl overflow-hidden hover:cursor-pointer">
            <div className="lg:h-64 lg:w-64 h-[190px] w-[200px] bg-neutral-300  overflow-hidden">
              <img src={items.color[0].pict[0].url} alt="" />
            </div>
            <div className="lg:h-24 lg:w-64 flex flex-col justify-center ml-3">
              <p className="lg:mb-2 mb-0 font-bold lg:text-2xl text-lg">{items.name}</p>
              <p className='lg:text-base text-sm'>{numberFormat1.format(items.price)}</p>
            </div>
          </div>
      </div>)}
    </div> : <p className='mt-10'>"No Product Searched"</p> }
    
</div>
  )
}

export default SearchResult