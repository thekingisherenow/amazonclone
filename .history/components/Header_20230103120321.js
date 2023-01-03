import Image from 'next/image'
import React, { useState } from 'react'
import { MapPinIcon, MagnifyingGlassIcon, ChevronDownIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useSession, signIn, signOut } from "next-auth/react"

function Header() {
  const { data: session } = useSession()
  const [signinOpen, setSigninOpen] = useState(false)

  return (
    <div>
      {/* TOP NAV */}
      <div className='bg-amazon flex h-16'>

        {/* FAVICON */}
        <div className='hover:border-2 border-white flex-shrink-0 '>
          <Image src="https://links.papareact.com/f90"
            width={140} height={30} alt=""
            className='cursor-pointer mt-4 px-4 '
          />
        </div>

        <div className='flex items-center text-sm  hover:border-2 border-white  w-30 mr-2 h-full '>
          <MapPinIcon className='w-7 h-5 ml-2 mt-2 text-white' />
          <div className='flex-col items-center justify-center' >
            <h1 className='text-gray-200 text-xs'>Deliver to</h1>
            <h1 className='text-white font-bold text-lg '> Nepal</h1>
          </div>
        </div>
        {/* SEARCH  */}

        <div className='hidden md:inline-flex m-1 mt-3  bg-white rounded-full flex-grow h-10'>

          <input className='p-2 h-full flex-grow bg-white rounded-l-md  focus:outline-none px-4' type="text" />

          <MagnifyingGlassIcon className=' h-10 text-xs p-2  bg-orange-300 rounded-r-md w-10 items-center  ' />
        </div>

        {/* RIGHT PART */}

        <div className='flex justify-end ml-auto text-sm items-center text-white space-x-1 whitespace-nowrap mr-3'>

          {/* //SIGN IN -LAPTOP. */}
          <div 
            onMouseEnter={() => setSigninOpen(true)} onMouseLeave={() => setSigninOpen(false)}
            className='hidden sm:inline-flex link  flex-col p-2 relative '>
            {session ? <p>Hello,{session.user.name} </p> : <p>Hello,sign in</p>}
            <span className='flex items-center '>
              <p className='font-bold md:text-sm'>Accounts & Lists</p>
              <ChevronDownIcon className='h-3 w-5 ml-1' />
            </span>
            {/* 
            POPOVERS */}
            {signinOpen && <div className='absolute z-50 truncate cursor-default -inset-44 top-12 text-black bg-white w-[400px] h-80 items-center grid grid-cols-2
            '>
              <div className='flex flex-col'>
                <div className='col-span-2 text-center h-12 p-5 '>
                  {!session?
                  <>
                  <button onClick={()=>signIn('google', { callbackUrl: 'http://localhost:3000/'})}
                   className='button' >Sign in</button>
                  <div className='flex'>
                    <p>New customer?</p>
                    <p>Sign in</p>
                  </div>
                  </>: 
                  <button onClick={() =>signOut()}
                   className='button' >Sign Out</button>
                }
                </div>

                <div className='flex'>
                  <div className='col-span-1 border border-gray-500'>
                    Your Lists
                    <ul className='list-none'>
                      <li>Create a List</li>
                      <li>Find a List or Registry</li>
                      <li>AmazonSmile Charity Lists</li>
                    </ul>
                  </div>
                  <div className='col-span-1 border border-gray-500'>
                    Your Account
                    <ul className='list-none'>
                      Account
                      <li>Orders</li>
                      <li>Recommendations</li>
                      <li>Browsing History</li>
                      <li>Watchlist</li>
                      <li>Video Purchases & Rentals</li>
                      <li>Kindle Unlimited</li>
                      <li>Content & Devices</li>
                      <li>Subscribe & Save Items</li>
                      <li>Memberships & Subscriptions</li>
                      <li>Music Library</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>}
          </div>
          
          <div className='hidden sm:inline-flex link  flex-col p-2 '>
            <p>Returns</p>

            <p className='font-bold md:text-sm'>& Orders</p>

          </div>

          <div className='link flex  p-2 items-center mr-2'>
            <div className='relative'>
              <ShoppingCartIcon className='w-10 h-10 items-center' />
              <span className='absolute top-[1px] right-[5px] bg-black text-orange-500 font-bold text-md rounded-full h-3 w-3 flex justify-center items-center p-3' >0</span>
            </div>
            <p className='font-bold md:text-sm hidden sm:inline-flex'>Cart</p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className='bg-amazon flex '>
        <div className='flex items-center text-white h-11 cursor-pointer'>


          <p className='text-white flex hover:border-2 hover:border-white'>
            <Bars3Icon className="h-6 w-6 ml-3 text-white " />
            <span className='mx-1 font-bold'> All</span>
          </p>
          <p className=' px-2  link'>Today&apos;s Deals</p>
          <p className=' px-2  link'>Customer Service</p>
          <p className=' hidden sm:inline-flex px-2  link'>Gift Cards</p>
          <p className=' hidden sm:inline-flex px-2  link'>Registry</p>
          <p className='  px-2  link'>Sell</p>
        </div>
        <div className='flex justify-end ml-auto items-center'>

          <p className='  text-white link  px-2  link '>Shop deals in Electronics</p>
        </div>
      </div>

    </div>
  )
}

export default Header