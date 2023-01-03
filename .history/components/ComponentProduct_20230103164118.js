import React from 'react'

function ComponentProduct({ id, price, description, category, title , image , rating }) {
    console.log("the rating is ",rating)
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt=""/>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  )
}

export default ComponentProduct
