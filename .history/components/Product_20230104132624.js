import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import {addToBasket} from "../slices/basketSlice"
import CurrencyFormat from 'react-currency-format';

function Product({ id, price, description, category, title , image , rating }) {
  const rate = Math.round(rating.rate);
  const dispatch = useDispatch();
  const [hasPrime,setHasPrime] = useState(false)

  const addItemToBasket = () =>{
    const product = {
      id, price, description, category, title , image , rating 
    }
    //dispatch le k garyo bhanda. eeuta global bhayeko action use garna milne banaune.
    dispatch(addToBasket(product))
  } 

  useEffect(() => {
    setHasPrime(Math.random()<0.5)
  }, [])
  

  return (
    <div className=' relative bg-white z-30 m-5 p-10 flex flex-col  '>
      <p className='absolute top-2 right-2 text-xs text-gray-400 italic'>{category}</p>
      <div className='relative h-52 w-40  mx-auto'>
      <Image  src={image} fill className="object-contain items-center mx-auto"   alt=""/>
      </div>
      <h4 className='my-3'>{title}</h4>

<div className='flex'>
  {Array(rate).fill().map((_,i)=>{
    return(
      <StarIcon key={i} className='h-5 w-5 text-yellow-500'/>
    )
  })}

 </div> 
<p className='text-xs my-2 line-clamp-2'>{description}</p>
<CurrencyFormat className='my-3' value ={price} prefix={'$'} />

 {hasPrime && <div className='flex items-center -mt-2 space-x-2 '>
  <img className='object-contain w-12 ' 
  id={id} src="https://links.papareact.com/fdw"  alt=""/>
  <p className='text-xs text-gray-500 '>Free Next-day delivery</p>
</div>} 

<button onClick={()=>addItemToBasket()}
 className='mt-auto button'>Add to Basket</button>


    </div>
  )
}

export default Product
