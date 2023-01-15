import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Header from '../components/Header'

function Success() {
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <main className='max-w-screen-lg bg-green-400 mx-auto'>
        <div>
            <CheckCircleIcon className='w-7 h-7 text-yellow-500' />
        </div>

      </main>
    </div>
  )
}

export default Success
