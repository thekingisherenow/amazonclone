import { buffer } from "micro";

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

export default async function handler(req, res) {
    if (req.method ==="POST"){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();

        
        res.status(200).json({ name: 'John Doe' })
    }
    else {
        res.status(500).json({ error: 'error' })

    }
  }
  