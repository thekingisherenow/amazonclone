import Image from 'next/image'
import React from 'react'
import { MapPinIcon ,MagnifyingGlassIcon, ChevronDownIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'

function Header() {
  return (
    <div>
      {/* TOP NAV */}
      <div className='bg-amazon flex h-16'>

        {/* FAVICON */}
            <div className='hover:border-2 border-white flex-shrink-0 '>
              <Image  src="https://links.papareact.com/f90" 
            width={140} height={30} alt="" 
            className='cursor-pointer mt-3 px-3 '
              />
            </div>

            <div className='flex items-center text-sm  hover:border-2 border-white  w-36 h-full '>
              <MapPinIcon className='w-7 h-5 ml-2 mt-2 text-white'/>
              <div className='flex-col items-center justify-center' >
              <h1 className='text-gray-200 text-xs'>Deliver to</h1>
             <h1 className='text-white font-bold text-lg '> Nepal</h1>
              </div>
            </div>
            {/* SEARCH  */}
          
              <div className='m-1 mt-3 flex bg-white rounded-xl flex-grow h-10'>

              <input  className='p-2 h-full flex-grow bg-white rounded-l-md  focus:outline-none px-4' type="text" />

              <MagnifyingGlassIcon className=' h-10 text-xs  bg-orange-400 w-10 items-center  ' />
              </div>
           
          {/* RIGHT PART */}

          <div className='flex text-sm items-center text-white space-x-2 whitespace-nowrap mr-3'>

            <div className='link flex flex-col p-1 '>
              <p>Hello,sign in</p>
              <span className='flex'>
                <p className='font-bold md:text-sm'>Accounts & Lists</p> 
              <ChevronDownIcon className='h-3 w-5 m-1 flex-shrink'/>
              </span>
            </div>
          <div className='link flex flex-col p-1 '>
              <p>Returns</p>
              
                <p className='font-bold md:text-sm'>& Orders</p> 
    
          </div>

          <div className='link flex  p-1 items-center mr-2'>
            <div className='relative'>
            <ShoppingCartIcon className='w-10 h-10 items-center'/>
            <span className='absolute top-[1px] right-[5px] bg-black text-orange-500 font-bold text-md rounded-full h-3 w-3 flex justify-center items-center p-3' >0</span>
            </div>
            <p className='font-bold md:text-sm'>Cart</p>
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