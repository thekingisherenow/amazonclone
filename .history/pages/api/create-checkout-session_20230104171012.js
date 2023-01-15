const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default function handler(req, res) {
    const {items,email} = req.body;
    console.log("items",items)
    console.log("email",email)
    res.status(200).json({ name: 'John Doe' })
  }
  