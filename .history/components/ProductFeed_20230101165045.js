import React from 'react'

function ProductFeed(props) {
    console.log(props.data)
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
  
    // Pass data to the page via props
    return { props: { data : data } }
  }
