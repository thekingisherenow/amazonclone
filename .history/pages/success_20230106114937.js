import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Header from '../components/Header'

function Success() {
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <main className='max-w-screen-lg  mx-auto'>
        <div className='flex p-10'>
            <CheckCircleIcon className='w-7 h-7 text-green-500' />
            <h1 className='text-3xl'>Thank you.Your order has been confirmed.</h1>
        </div>

      </main>
    </div>
  )
}

export default Success
