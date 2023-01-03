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
                <p>{rate}</p>
            <p className='text-xs text-gray-500'>{description}</p>
            <p>{price}</p>
            </div>
            <div className='col-span-1 flex flex-col'>
                <button className='button  text-xs' >Add to Basket</button>
                <button className='button mt-2 text-xs'>Remove from Basket</button>

            </div>
        </div>
    )
}

export default ComponentProduct
