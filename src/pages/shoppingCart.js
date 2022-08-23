import React,{useEffect}from 'react'
import { BsTrash } from 'react-icons/bs';
import { connect, useDispatch, useSelector } from "react-redux";
import { decrementCarts, deleteCarts, getShoppingCarts, incrementCarts } from '../redux/action';

function ShoppingCart(props) {
    const dispatch = useDispatch()
    const options1 = { style: 'currency', currency: 'IDR' };
    const numberFormat1 = new Intl.NumberFormat('id-ID', options1);
    const {addCartResult} = useSelector((state) => state.addCartsReducers)
    

    useEffect(() => {
      dispatch(getShoppingCarts())
    }, [addCartResult])
    
    const handleDelete = (id) => {
        dispatch(deleteCarts(id))
        dispatch(getShoppingCarts())
    }

    const handleIncrement = (items, color, size, pictUrl) => {
        dispatch(incrementCarts(items, color, size, pictUrl))
        dispatch(getShoppingCarts()) 
    }

    const handleDecrement = (items, color, size, pictUrl) => {
        items.total > 1 ? dispatch(decrementCarts(items, color, size, pictUrl)) : dispatch(deleteCarts(items.id))
        dispatch(getShoppingCarts())
    }
    
    console.log("carts =>", props);
    console.log("AC", addCartResult);
  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col  justify-start items-center">
        <p className='text-4xl font-bold my-6'>Shopping Cart</p>
        <div className='flex lg:flex-row flex-col lg:space-x-4 space-y-4'>
        {props.getCartsReducers.getCartResult != 0 && (<div className='border-2 border-neutral-300 shadow-xl rounded-2xl p-3 space-y-4'>
            {props.getCartsReducers.getCartResult && props.getCartsReducers.getCartResult.map(product => <div key={product.id} className='flex justify-center space-x-2'>
                    <div className='w-[130px] h-[160px] bg-neutral-300 rounded-lg overflow-hidden shadow-xl'>
                        
                        <img src={product.pict} alt="" />
                    </div>
                    <div className='xl:w-[360px] sm:h-[160px] sm:w-[160px] w-[80px] flex flex-col justify-between'>
                        <p className='font-bold text-2xl'>{product.product.name}</p>
                        <p className='text-sm '>Size : {product.selected_size}</p>
                        <p className='text-sm'>Color : {product.selected_color}</p>
                        <div onClick={() => handleDelete(product.id)} className='flex hover:cursor-pointer'>
                            <BsTrash className='mt-[2px]'/>
                            <p className='text-sm'>Delete</p>
                        </div>  
                    </div>
                    <div className='sm:w-[200px] sm:h-[160px] w-[65px] flex flex-col justify-between items-end'>
                        <div className='flex'>
                            <div onClick={() => handleDecrement(product,product.selected_color, product.selected_size, product.pict)} className='w-6 h-6 bg-button flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-yellow-700'>-</div>
                            <div className='w-6 h-6  flex items-center justify-center rounded-sm text-sm'>{product.total}</div>
                            <div onClick={() => handleIncrement(product,product.selected_color, product.selected_size, product.pict)} className='w-6 h-6 bg-button flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-yellow-700'>+</div>
                        </div>
                        <p className='sm:inline hidden'>Price : {numberFormat1.format(product.total_price)}</p>
                    </div>
                </div>)}                
            </div>)}
            
            
            <div className='sm:h-[180px] xl:w-[300px] lg:w-[230px] sm:w-[550px] w-[320px] border-2 border-neutral-300 shadow-xl rounded-2xl p-3 text-sm space-y-4 '>
                <div className='flex justify-between'>
                    <p>Total Price :</p>
                    <p>{numberFormat1.format(props.getCartsReducers.getTotalPrice)}</p> 
                </div>
                <div className='flex justify-between border-b-2 border-neutral-300'>
                    <p>Shipping :</p>
                    <p>Free</p>
                </div>
                <div className='flex justify-between font-bold'>
                    <p>Total</p>
                    <p>{numberFormat1.format(props.getCartsReducers.getTotalPrice)}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='lg:w-[250px] sm:w-[520px] w-[300px]  h-9 bg-button rounded-md hover:bg-yellow-700'>Go to Checkout</button>
                </div>
                
                
            </div>
        </div>
        
    </div>
  )
}

export default connect(state => state)(ShoppingCart)