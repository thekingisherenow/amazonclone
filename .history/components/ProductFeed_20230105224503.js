import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <>
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        {products.slice(0,4).map((product,i) =>
        (
          <Product key ={i} id={product.id} price={product.price} description={product.description} category={product.category} title = {product.title} image = {product.image} rating = {product.rating} />
          ))
        }
    
    <div className=' md:col-span-full'> 
      <img src="https://links.papareact.com/dyz" />
    </div>

    <div className='md:col-span-2'>
    {products.slice(4,5).map((product,i) =>
        (
          <Product key ={i+10} id={product.id} price={product.price} description={product.description} category={product.category} title = {product.title} image = {product.image} rating = {product.rating} />
          ))
        }
    </div>
     
      {products.slice(5,products.length).map((product,i) =>
        (
          <Product key ={i+20} id={product.id} price={product.price} description={product.description} category={product.category} title = {product.title} image = {product.image} rating = {product.rating} />
          ))
        }
     

    </div>
        </>
  )
}

export default ProductFeed

