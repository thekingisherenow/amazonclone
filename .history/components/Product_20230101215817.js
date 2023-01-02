import Image from 'next/image'
import React from 'react'

function Product({ id, price, description, category, title , image , rating }) {
    console.log("The product image is :",image)
  return (
    <div className=' flex flex-col p-4 '>
      <p>{category}</p>
      <Image id={id} src={image} width={200} height={200} alt=""/>
      <h4>{title}</h4>


    </div>
  )
}

export default Product
