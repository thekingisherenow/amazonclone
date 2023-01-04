import { StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'

function CheckoutProduct({ id, price, description, category, title, image, rating }) {
    console.log("the rating is ", rating)
    const rate = Math.round(rating.rate);
    const [hasPrime, setHasPrime] = useState(false)
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product ={
            id, price, description, category, title , image , rating 
        }
    }
    const removeItemFromBasket = () => {
        const product ={
            id, price, description, category, title , image , rating 
        }
    }
    useEffect(() => {
        setHasPrime(Math.random() < 0.5)
    }, [])

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-1 p-4 '>
                <img className='h-24 w-full object-contain' src={image} alt="" />
            </div>
            <div className='col-span-3 p-4'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rate).fill().map((_, i) => {
                        return (
                            <StarIcon key={i} className='h-5 w-5 text-yellow-500' />
                        )
                    })}
                </div>
                <p className='text-xs text-gray-500 my-2 mr-4 line-clamp-2'>{description}</p>
                <p className='-mt-2 '>$ {price}</p>
                {hasPrime && <div className='flex items-center mt-1 space-x-2 '>
                    <img loading="lazy"
                        className='object-center z-0 w-12'
                        id={id} src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500 '>Free Next-day delivery</p>
                </div>}
            </div>
            <div className='col-span-1 flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={() => addItemToBasket()}
                    className='button  text-xs' >Add to Basket</button>
                <button onClick={() => removeItemFromBasket()}
                    className='button  text-xs'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
