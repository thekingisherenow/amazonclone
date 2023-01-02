import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

function Product({ id, price, description, category, title , image , rating }) {
    console.log("The product image is :",image)
    const [rating] = useState(1)
  return (
    <div className=' flex flex-col p-4 '>
      <p>{category}</p>
      <Image id={id} src={image} width={200} height={200} alt=""/>
      <h4>{title}</h4>

      <div className='flex'>
        {Array(rating).fill().map((_,i)=> (
            <StarIcon />
        ))
        }

      </div>


    </div>
  )
}

export default Product
