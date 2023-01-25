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
                //description: `${item.size.replace("_", " ")} ${item.style}`,
                images: [
                  item.main_image.data.attributes.formats.thumbnail.url,
                ],
              },
              unit_amount: 450,
            },
            quantity: 3,
          };
        }),
        success_url: `${req.headers.origin}/StripeSuccess`,
        cancel_url: `${req.headers.origin}/Shop`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
      console.log(err);
    }
  }
}
