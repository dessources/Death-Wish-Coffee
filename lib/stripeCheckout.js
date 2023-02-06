import getStripe from "../lib/getStripe";
import axios from "axios";

export default async function stripeCheckout(route, data) {
  try {
    const stripe = await getStripe();
    const res = await axios.post(`/api/${route}`, data);
    await stripe.redirectToCheckout({ sessionId: res.data.id });
  } catch (err) {
    console.log(err.message);
  }
}
