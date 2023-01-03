import React from 'react'

function ComponentProduct({ id, price, description, category, title , image , rating }) {
    console.log("the rating is ",rating)
  return (
    <div className='flex'>
      <p>{title}</p>
      <img className='h-20 w-20 object-contain'  src={image} alt=""/>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  )
}

export default ComponentProduct
