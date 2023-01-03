import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'

function checkout() {
    const items = useSelector(selectItems)
    return (
        <div>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>

                {/* left */}
                <div className='lg:w-3/4  '>
                    <div className='relative w-full h-56 top-0   '>
                        <Image src="https://links.papareact.com/ikj"
                            alt="" fill
                            className='object-contain'
                        />
                    </div>

                    <div className='flex flex-col mt-5'>
                        <h1 className='text-3xl text-black border-b p-4 ml-2 '>
                            {items.length===0? "Your amazon basket is empty.":"Your Shopping Basket"}
                            
                            </h1>
                    </div>

                </div>

                {/* right */}
                <div>
                    heyy
                </div>
            </main>
        </div>
    )
}

export default checkout
