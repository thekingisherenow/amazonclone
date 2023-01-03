import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react'

function ComponentProduct({ id, price, description, category, title, image, rating }) {
    console.log("the rating is ", rating)
    const rate = Math.round(rating.rate);

    return (
        <div className='grid grid-cols-5'>

            <div className='col-span-1'>
                <img className='h-24 w-full object-contain' src={image} alt="" />
            </div>
            <div className='col-span-3'>
                <p>{title}</p>
                <div className='flex'>

                {Array(rate).fill().map((_, i) => {
                    return (
                        <StarIcon  className='h-5 w-5 text-yellow-500' />
                        )
                    })}
                    </div>
                <p className='text-xs text-gray-500 my-2 line-clamp-2'>{description}</p>
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
