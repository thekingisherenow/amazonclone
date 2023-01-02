import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
   console.log("this is product feed",products)
  return (
    <div>
        
        <Product />
    
    </div>
  )
}

export default ProductFeed

