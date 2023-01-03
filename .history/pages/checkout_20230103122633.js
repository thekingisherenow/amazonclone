import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

function checkout() {
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
                    <div>
                        <h1>Your Shopping Basket</h1>
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
