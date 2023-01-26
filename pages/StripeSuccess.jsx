import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import formatMoney from "../utils/formatMoney";

import { infoWrapper, main, adress, orderInfo, content } from "../styles/StripeSuccess.module.css";
import { use } from "passport";
export async function getServerSideProps(params) {
  const order = await Stripe.checkout.sessions.retrieve(params.query.session_id, {
    expand: ["line_items"],
  });

  return { props: { order } };
}
export default function StripeSuccess({ order }) {
  const router = useRouter();
  return (
    <>
      <main className={main}>
        <header></header>
        <div className={content}>
          <h1> Merci pour votre Achat !</h1>
          <h2>Un email de confirmation a été envoyé à: </h2>
          <h2>{order.customer_details.email}</h2>
          <div className={infoWrapper}>
            <div className={adress}>
              <h3>Adresse</h3>

              {Object.entries(order.customer_details.address).map(([key, val]) => (
                <p key={key}>{val ? `${key} : ${val}` : ""}</p>
              ))}
            </div>

            <div className={orderInfo}>
              <h3>Produits</h3>
              {order.line_items.data.map((item) => (
                <div key={item.id}>
                  <p>name: {item.description} </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {formatMoney(item.price.unit_amount)}</p>
                </div>
              ))}
            </div>
          </div>
          <button>
            <Link href="/Shop">Continuer à shopper</Link>
          </button>
        </div>
      </main>
    </>
  );
}
