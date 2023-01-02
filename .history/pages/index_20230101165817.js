import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import styles from '../styles/Home.module.css'

export default function Home({products}) {
  console.log(products)
  return (
   <div>
       {/* HEADER */}
    <Header />
    <div className='max-w-screen-2xl mx-auto'>

    <Banner />

    {/* Product Feed */}
    <ProductFeed />
    </div>
    
   </div>
  )
}


// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`) 
  const data = await res.json()
  console.log("server side props bhitra nai data ko value :")
  console.log(data)
  // Pass data to the page via props
  return { props: { products:data } }
}
