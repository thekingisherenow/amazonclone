const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  