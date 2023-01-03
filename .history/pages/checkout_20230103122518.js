import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

function checkout() {
    return (
        <div>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>

                {/* left */}
                <div className='w-3/4 mt-20'>
                    <div className=' flex-grow '>
                        <Image src="https://links.papareact.com/ikj"
                            height={200} width={1200}  alt=""
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
