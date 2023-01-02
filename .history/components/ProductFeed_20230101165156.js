import React from 'react'

function ProductFeed({data}) {
    console.log(data)
  return (
    <div>
      Product Feed:
      The data is : 
    </div>
  )
}

export default ProductFeed

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    console.log("server side props bhitra nai data ko value :",data)
    // Pass data to the page via props
    return { props: { data : data } }
  }
