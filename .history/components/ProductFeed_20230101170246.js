import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
   console.log("this is product feed",products)
  return (
    <div>
        
        {products.map((product,i) =>
        
        (
            <Product product={product} />
        ))
        }
    
    </div>
  )
}

export default ProductFeed

