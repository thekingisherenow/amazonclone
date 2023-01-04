import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems } from '../slices/basketSlice'
import CurrencyFormat from 'react-currency-format';
import { useSession } from 'next-auth/react'

function Checkout() {
    const { data: session } = useSession()
    const items = useSelector(selectItems)


    return (
        <div>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>

                {/* left */}
                <div className='lg:w-3/4  '>
                    <div className='relative w-full h-28 sm:h-56     '>
                        <Image src="https://links.papareact.com/ikj"
                            alt="" fill
                            className='object-contain'
                        />
                    </div>

                    <div className='flex flex-col mx-5'>
                        <h1 className='text-3xl text-black border-b p-4 ml-2 '>
                            {items.length===0? "Your amazon basket is empty.":"Your Shopping Basket"}
                            </h1>

                            {items.map((item,i)=>{
                                return(
                                    
                            <CheckoutProduct
                            key={i}
                            id={item.id}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                             />
                                    
                                )
                            })}
                    </div>

                </div>

                {/* right */}
                <div className='flex flex-col space-y-2'>
                    <div className='flex'>

                    <p>Subtotal (2 items) : </p>

                    <h1 className='font-bold'> $ 70</h1>
                {/* <CurrencyFormat className='my-3' value ={price} prefix={'$'} /> */}

                    </div>
                    <button className= {`button mt-2 ${!session && "from-gray-700 to-gray-400 w-52 cursor-not-allowed text-white"} `}>
                       {!session? "Sign in to Checkout":"Proceed to Checkout"} </button>
                </div>
            </main>
        </div>
    )
}

export default Checkout
