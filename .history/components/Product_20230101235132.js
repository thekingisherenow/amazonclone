import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, price, description, category, title , image , rating }) {
  const rate = Math.round(rating.rate);
  console.log("The product rating is :",rate)
  console.log(typeof(rate))
  const hi = Array(rate)
  console.log(hi)
  return (
    <div className=' flex flex-col p-4 '>
      <p>{category}</p>
      <Image id={id} src={image} width={200} height={200} alt=""/>
      <h4>{title}</h4>
<div className='flex'>
  {hi.map((_,i)=>{
    return(
      <h1>hii</h1>
    )
  })}
                  <StarIcon  className='h-5 w-5'/>

 </div> 
 <div>
  {Array(rate)}
 </div>



    </div>
  )
}

export default Product
