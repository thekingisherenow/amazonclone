import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, price, description, category, title , image , rating }) {
  rating = Math.round(rating);
  console.log("The product rating is :",rating)
  return (
    <div className=' flex flex-col p-4 '>
      <p>{category}</p>
      <Image id={id} src={image} width={200} height={200} alt=""/>
      <h4>{title}</h4>

      {/* <div className='flex'>
        {Array(rating).map((_,i)=>{
          console.log(i)
          return(
            <StarIcon  className='h-5 w-5'/>
          )
        })} */}

      {/* </div> */}


    </div>
  )
}

export default Product
