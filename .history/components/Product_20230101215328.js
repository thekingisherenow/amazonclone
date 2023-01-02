import Image from 'next/image'
import React from 'react'

function Product({ id, price, description, category, title , image , rating }) {
    console.log("The product image is :",image)
  return (
    <div>
      <p>{category}</p>
      <Image id={id} source={image} alt=""/>
    </div>
  )
}

export default Product
