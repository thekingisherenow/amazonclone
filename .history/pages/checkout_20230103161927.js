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
                <div className='w-3/4 mt-5'>
                    <div className='w-full flex-grow '>
                        <Image src="https://links.papareact.com/ikj"
                            height={200} width={1200}  alt=""
                            className=' '
                        />
                    </div>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-3xl border-b p-4 ml-2 '>
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
