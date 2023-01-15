import { buffer } from "micro";
import * as admin from "firebase-admin"
const endpointSecret = process.env.STRIPE_SIGNING_SECRET
//Secure connection to the firebas on the back end.
var serviceAccount = require("../../permissions.json");
const app = !admin.apps.length?admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}): admin.app();

export default async function handler(req, res) {
    if (req.method ==="POST"){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();

        const sig = request.headers['stripe-signature'];

        let event;
        // verify the EVENT posted came from stripe. 
        try {
          event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        }
        catch (err) {
            console.log("Error",err);
          return res.status(400).send(`Webhook Error: ${err.message}`);
        }
        
        // handle the checkout.session.completed evenet
        switch (event.type) {
            case 'payment_intent.succeeded':
              const paymentIntent = event.data.object;
              console.log('PaymentIntent was successful!');
              break;
            case 'payment_method.attached':
              const paymentMethod = event.data.object;
              console.log('PaymentMethod was attached to a Customer!');
              break;
            // ... handle other event types
            default:
              console.log(`Unhandled event type ${event.type}`);
          }

            // Return a response to acknowledge receipt of the event

        res.status(200).json({ received: true })
    }
    else {
        res.status(4700).json({ error: 'error' })

    }
  }
  