import React from 'react'

function Product({ id, price, description, category, title , image , rating }) {
    console.log("The product is :",id)
  return (
    <div>
      <p>{category}</p>
      
    </div>
  )
}

export default Product
