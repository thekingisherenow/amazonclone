import { buffer } from "micro";

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

export default async function handler(req, res) {
    if (req.method ==="POST"){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();

        const sig = request.headers['stripe-signature'];

        let event;

        try {
          event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        }
        catch (err) {
            console.log("Error",err);
          return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        res.status(200).json({ name: 'John Doe' })
    }
    else {
        res.status(4700).json({ error: 'error' })

    }
  }
  