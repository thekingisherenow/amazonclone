import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, price, description, category, title , image , rating }) {
  const rate = Math.round(rating.rate);

  const [hasPrime] = useState(Math.random()<0.5)

  console.log("The product price is :",price)
  return (
    <div className=' flex flex-col p-4 '>
      <p>{category}</p>
      <Image id={id} src={image} width={200} height={200} alt=""/>
      <h4>{title}</h4>
<div className='flex'>
  {Array(rate).fill().map((_,i)=>{
    return(
      <StarIcon  className='h-5 w-5'/>

    )
  })}

 </div> 


{hasPrime && <p>Has Prime Delivery.</p>}


    </div>
  )
}

export default Product
