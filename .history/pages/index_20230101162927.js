import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
       {/* HEADER */}
    <Header />
    <div className='max-w-screen-2xl mx-auto'>

    <Banner />
    </div>
    
   </div>
  )
}
