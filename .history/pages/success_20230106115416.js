import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Header from '../components/Header'

function Success() {
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <main className='max-w-screen-lg  mx-auto'>
        <div className='flex flex-col space-y-3'>

        <div className='flex p-10 space-x-2 items-center'>
            <CheckCircleIcon className='w-7 h-7 text-green-500 shrink-0' />
            <h1 className='text-3xl'>Thank you.Your order has been confirmed.</h1>
        </div>
        <p>
          Thank you for shopping with us.We'll send a conformation once your items has shipped. If you would like to
          check the status of your order(s), please press the link below. :
        </p>
        <button onClick={()=>router.push("/orders")} 
        className='button mt-8'>Go to my orders.</button>

        </div>
      </main>
    </div>
  )
}

export default Success
