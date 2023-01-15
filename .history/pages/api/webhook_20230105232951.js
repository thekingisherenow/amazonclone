import { buffer } from "micro";
import * as admin from "firebase-admin"
import Stripe from "stripe";
const endpointSecret = process.env.STRIPE_SIGNING_SECRET
//Secure connection to the firebas on the back end.
var serviceAccount = require("../../permissions.json");
const app = !admin.apps.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}) : admin.app();

const fulfillOrder = async (session) => {
  console.log("fulfilling order");

  return app
  .firestore()
  .collection('users')
  .doc(session.metadata.email)
  .collection("orders")
  .doc(session.id)
  .set({
    amount: session.amount_total / 100,
    images:JSON.parse(session.metadata.images),
    timestamp : admin.firestore.FieldValue.serverTimestamp()
  })
  .then(()=>{
    console.log(`SUCCESS : Order ${session.id} has been added to the DB.`)
  })

}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    console.log(req.headers,"req.headers")
    const sig = req.headers['stripe-signature'];

    let event;
    // verify the EVENT posted came from stripe. 
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    }
    catch (err) {
      console.log("Error", err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // handle the checkout.session.completed evenet
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //Fulfill the order.
      return fulfillOrder(session)
      .then(()=>res.status(200))
      .catch((err)=>res.status(400)
      .send(`WebHook error: ${err.message}`))

    }
    // Return a response to acknowledge receipt of the event

    res.status(200).json({ received: true })
  }
  else {
    res.status(4700).json({ error: 'error' })

  }
}

export const config = {
  api :{
    bodyParser:false,
  externalResolver:true
  }
}
