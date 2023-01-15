const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const {items,email} = req.body;

    const transformedItems = items.map(item => ({
          // description: item.description,
          quantity:1,
          price_data: {
            currency: "usd",
            unit_amount : item.price*100,
            product_data:{
              name: item.title,
              images: [item.image]
            } 
          }
    }))

    console.log("transformedItems",transformedItems)
    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items: transformedItems,
      mode:"payment",
      success_url:`${process.env.HOST}/success`,
      cancel_url:`${process.env.HOST}/checkout`,
      metadata : {
        email : email,
        images: JSON.stringify(items.map(item=>item.image))
      },
    }) 

    res.status(200).json({id:session.id})

  }
  