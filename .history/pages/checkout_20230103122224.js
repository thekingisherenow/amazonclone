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
                    <div className='relative w-28 flex-grow h-20'>
                        <Image src="https://links.papareact.com/ikj"
                            width={1080} height={50} alt=""
                            className=' '
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
