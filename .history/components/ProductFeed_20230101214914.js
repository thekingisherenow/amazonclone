import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
   console.log("this is product feed",products)
  return (
    <div>
        
        {products.map((product,i) =>
        
        (
            <Product key ={product.id} id={product.id} price={product.price} category={product.category} title = {product.title} image = {product.image} rating = {product.rating} price={product.rating } />
        ))
        }
    
    </div>
  )
}

export default ProductFeed

