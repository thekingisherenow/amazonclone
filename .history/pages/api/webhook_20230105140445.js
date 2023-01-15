import { buffer } from "micro";

export default async function handler(req, res) {
    if (req.method ==="POST"){
        const requestBuffer = await buffer(req);

        res.status(200).json({ name: 'John Doe' })
    }
    else {
        res.status(500).json({ error: 'error' })

    }
  }
  