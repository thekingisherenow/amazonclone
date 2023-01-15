import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CurrencyFormat from 'react-currency-format';
import { useSession } from 'next-auth/react'
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key);


function Checkout() {
    const { data: session } = useSession()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal);

    const createCheckoutSession = async () =>{
        const stripe = await stripePromise;
        const checkoutSessopn = await axios.post("/api/create-checkout-session",
        {
            items:items ,email: session.user.email
        })

    }

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
                <div className='flex flex-col bg-white p-4 shadow-md space-y-2'>
                    {items.length>1 && 
                    <div className='my-2'>
                    <p>Subtotal ({items.length} items) : </p>
                    <CurrencyFormat className='font-bold' value ={total} prefix={'$'} decimalScale={2} displayType={"text"} />
                    </div>
                    }


                    <button onClick={()=>createCheckoutSession()} role="link"
                    disabled={!session}
                    className= {`button mt-2 ${!session && "from-gray-700 to-gray-400 w-52  cursor-not-allowed text-white border-gray-500"} `}>
                       {!session? "Sign in to Checkout":"Proceed to Checkout"} </button>
                </div>
            </main>
        </div>
    )
}

export default Checkout
