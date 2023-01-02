import Image from 'next/image'
import React from 'react'
import { MapPinIcon ,MagnifyingGlassIcon, ChevronDownIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'

function Header() {
  return (
    <div>
      {/* TOP NAV */}
      <div className='bg-amazon flex text-w'>

        {/* FAVICON */}
            <div className='hover:border-2 border-white   '>
              <Image  src="https://links.papareact.com/f90" 
            width={190} height={70} alt="" 
            className='cursor-pointer   pt-6 pb-1 px-6'
              />
            </div>

            <div className='flex items-center text-sm  hover:border-2 border-white  w-36 '>
              <MapPinIcon className='w-7 h-7 ml-2 mt-4 text-white'/>
              <div className='flex-col items-center justify-center' >
              <h1 className='text-gray-200'>Deliver to</h1>
             <h1 className='text-white font-bold text-xl'> Nepal</h1>
              </div>
            </div>
            {/* SEARCH  */}
          
              <div className='m-3 bg-white rounded-xl flex '>

              <input  className='' />
              <div className=' bg-orange-400 w-10 flex items-center justify-center'>

              <MagnifyingGlassIcon className='w-9 font-bold ' />
              </div>
              </div>
           
          {/* RIGHT PART */}

          <div className='flex text-sm items-center text-white space-x-6 whitespace-nowrap'>

            <div className='link flex flex-col p-2 '>
              <p>Hello,sign in</p>
              <span className='flex'>
                <p className='font-extrabold md:text-sm'>Accounts & Lists</p> 
              <ChevronDownIcon className='h-5 w-5 m-1 flex-shrink'/>
              </span>
            </div>
          <div className='link flex flex-col p-2 '>
              <p>Returns</p>
              
                <p className='font-extrabold md:text-sm'>& Orders</p> 
    
          </div>
          <div className='link flex  p-2 items-center '>
            <div className='relative'>
            <ShoppingCartIcon className='w-10 h-10'/>
            <span className='absolute top-[2px] right-[1px] bg-black text-orange-500 font-extrabold text-md rounded-full h-3 w-3 flex justify-center items-center p-3' >0</span>
            </div>
            <p className='font-extrabold md:text-sm'>Cart</p>
          </div>
        </div>
          </div>
      {/* BOTTOM NAV */}
      <div className='text-yellow-300'>
       <h1>hii</h1>       </div>
    </div>
  )
}

export default Header