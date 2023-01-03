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
                <p>Ratings</p>
            </div>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    )
}

export default ComponentProduct
