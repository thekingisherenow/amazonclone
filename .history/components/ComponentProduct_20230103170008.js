import { StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'

function ComponentProduct({ id, price, description, category, title, image, rating }) {
    console.log("the rating is ", rating)
    const rate = Math.round(rating.rate);
    const [hasPrime, setHasPrime] = useState(false)
    useEffect(() => {
        setHasPrime(Math.random() < 0.5)
    }, [])

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
                            <StarIcon className='h-5 w-5 text-yellow-500' />
                        )
                    })}
                </div>
                <p className='text-xs text-gray-500 my-2 line-clamp-2'>{description}</p>
                <p className='z-10'>$ {price}</p>
                {hasPrime && <div className='flex items-center p-5 space-x-2 '>
                    <img className='object-cover z-0 w-12'
                        id={id} src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500 '>Free Next-day delivery</p>
                </div>}
            </div>
            <div className='col-span-1 flex flex-col'>
                <button className='button m-1 text-xs' >Add to Basket</button>
                <button className='button m-1 text-xs'>Remove from Basket</button>

            </div>
        </div>
    )
}

export default ComponentProduct
