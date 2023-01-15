import moment from 'moment'
import { getSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'
import db from '../firebase'

function Orders({orders}) {
    console.log(orders)
  return (
    <div>
      <Header/>
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b border-yellow-400 mb-2 pb-1'>Your Orders</h1>

        {session?<h2>x Orders</h2>:<h2>Please Sign in to see your Orders.</h2>}
        <div>

        </div>
      </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const session = getSession(context);

    if (!session){
        return {
            props: {}, //sending empty props.
          }
    }
    //From firebasedb
    const stripeOrders = await db.collection('users').doc(session.user.email)
    .collection('orders').orderBy('timestamp','desc').get();

    //Stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order)=>({
            id: order.id,
            amount:order.data().amount,
            images:order.data().images,
            timestamp:moment(order.data().timestamp.toDate()).unix(),
            items : (
                await stripe.checkout.sessions.listLineItems(order.id,{limit: 100})
            ).data,
        }))
    )
    return {
      props: {orders}, // will be passed to the page component as props
    }
  }