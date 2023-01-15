const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default function handler(req, res) {
    const {items,email} = req.body;
    res.status(200).json({ items: items,email: email }); 
  }
  