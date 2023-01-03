import React from 'react'

function ComponentProduct({ id, price, description, category, title, image, rating }) {
    console.log("the rating is ", rating)
    const rate = rating.rate;
    
    return (
        <div className='grid grid-cols-5'>

            <div className='col-span-1'>
                <img className='h-24 w-full object-contain' src={image} alt="" />
            </div>
            <div className='col-span-3'>
                <p>{title}</p>
                <p>{Array(rate).fill().map((_,i)=>{
    return(
      <StarIcon key={id} className='h-5 w-5 text-yellow-500'/>
    )
  })}</p>
            <p className='text-xs text-gray-500'>{description}</p>
            <p>{price}</p>
            </div>
            <div className='col-span-1 flex flex-col'>
                <button className='button m-1 text-xs' >Add to Basket</button>
                <button className='button m-1 text-xs'>Remove from Basket</button>

            </div>
        </div>
    )
}

export default ComponentProduct
