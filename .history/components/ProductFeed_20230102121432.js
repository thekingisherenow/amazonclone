import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
   console.log("this is product feed",products)
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
        {products.map((product,i) =>
        (
            <Product key ={product.id} id={product.id} price={product.price} description={product.description} category={product.category} title = {product.title} image = {product.image} rating = {product.rating} />
        ))
        }
    
    </div>
  )
}

export default ProductFeed

