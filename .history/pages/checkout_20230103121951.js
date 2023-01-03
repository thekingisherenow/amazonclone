import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

function checkout() {
    return (
        <div>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>

                {/* left */}
                <div className='mt-20'>
                    <div className='relative w-full h-20 z-0'>
                        <Image src="https://links.papareact.com/ikj"
                            fill alt=""
                            className='cursor-pointer m-50 '
                        />
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
