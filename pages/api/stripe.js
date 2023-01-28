import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //create checkout seesion

      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "FR"],
        },
        allow_promotion_codes: true,
        shipping_options: [{ shipping_rate: "shr_1MU40jAD9QFi0QfM4mjYS7Zw" }],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.main_image],
              },
              unit_amount_decimal: Number((item.price * 100).toFixed(2)),
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/StripeSuccess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/Shop`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
      console.log(err);
    }
  }
}
