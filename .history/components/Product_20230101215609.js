import Image from 'next/image'
import React from 'react'

function Product({ id, price, description, category, title , image , rating }) {
    console.log("The product image is :",image)
  return (
    <div className='flex'>

    <div className=' flex  p-4 '>
      <p>{category}</p>
      <Image id={id} src={image} width={40} height={60}         alt=""/>
    </div>

    </div>
  )
}

export default Product