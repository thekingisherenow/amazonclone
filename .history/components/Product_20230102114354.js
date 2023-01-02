import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, price, description, category, title , image , rating }) {
  const rate = Math.round(rating.rate);

  const [hasPrime] = useState(Math.random()<0.5)

  console.log("The product price is :",price)
  return (
    <div className=' relative bg-white z-30 p-10 flex flex-col  '>
      <p className='absolute top-2 right-2 text-xs italic'>{category}</p>
      <Image id={id} src={image} width={200} height={200} alt=""/>
      <h4 className='my-3'>{title}</h4>

<div className='flex'>
  {Array(rate).fill().map((_,i)=>{
    return(
      <StarIcon  className='h-5 w-5'/>
    )
  })}

 </div> 

<p>$ {price} </p>

 {hasPrime && <div>
  <img id={id} src="https://links.papareact.com/fdw"  alt=""/>
  <p>Free Next-day delivery</p>
</div>} 

<button>Add to Basket</button>


    </div>
  )
}

export default Product
