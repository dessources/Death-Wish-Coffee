import Stripe from "stripe";
import formatProductDescription from "../../utils/formatProductDescription";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "FR"],
        },
        allow_promotion_codes: true,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: req.body.name,
                description: `${formatProductDescription(req.body.size, req.body.style)}` || " ",
                images: [req.body.image],
              },
              unit_amount_decimal: Number((req.body.price * 100).toFixed(2)),
              recurring: {
                interval: "day",
                interval_count: req.body.frequency,
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/StripeSuccess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/Subscription`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
      console.log(err);
    }
  }
}
