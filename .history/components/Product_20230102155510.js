import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, price, description, category, title , image , rating }) {
  const rate = Math.round(rating.rate);

  const [hasPrime,setHasPrime] = useState(false)

  useEffect(() => {
    setHasPrime(Math.random()<0.5)
  }, [])
  

  console.log("The product price is :",price)
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
      <StarIcon key={id} className='h-5 w-5 text-yellow-500'/>
    )
  })}

 </div> 
<p className='text-xs my-2 line-clamp-2'>{description}</p>
<p className='mb-5'>$ {price} </p>

 {hasPrime && <div className='flex items-center -mt-5 space-x-2 '>
  <img className='object-contain w-12 ' 
  id={id} src="https://links.papareact.com/fdw"  alt=""/>
  <p className='text-xs text-gray-500 '>Free Next-day delivery</p>
</div>} 

<button className='mt-auto button'>Add to Basket</button>


    </div>
  )
}

export default Product
