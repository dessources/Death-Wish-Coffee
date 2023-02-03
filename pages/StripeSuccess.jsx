import React from "react";
import Link from "next/link";
import Image from "next/image";
const Stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
//text formats
import formatMoney from "../utils/formatMoney";
import formatAdress from "../utils/formatAdress";
import formatDateTime from "../utils/formatDateTime";
import {
  infoWrapper,
  main,
  message,
  confirmed,
  productInfo,
  orderInfo,
  content,
  email,
  logoContainer,
  product,
  products,
  total,
  shipping,
} from "../styles/StripeSuccess.module.css";
import logo from "../images/logo.webp";

export async function getServerSideProps(params) {
  const order = await Stripe.checkout.sessions.retrieve(params.query.session_id, {
    expand: ["line_items", "payment_intent"],
  });
  console.dir(order, { depth: null });
  if (order.mode !== "subscription")
    order.payment_details = await Stripe.paymentMethods.retrieve(order.payment_intent.payment_method);
  return { props: { order } };
}
export default function StripeSuccess({ order }) {
  console.dir(order);

  return (
    <>
      <main className={main}>
        <header></header>
        <div className={content}>
          <div className={logoContainer}>
            <Image src={logo} alt=""></Image>
          </div>
          <div className={message}>
            <h1> Merci pour votre Achat !</h1>
            <p>Hello {order.customer_details.name},</p>
            <p className={confirmed}>Votre commande a été confirmée et sera bientôt expédiée.</p>
            <p>Un email de confirmation a été envoyé à: </p>
            <p className={email}>{order.customer_details.email}</p>
          </div>
          <div className={infoWrapper}>
            <h3>Les détails de votre commande:</h3>
            <div className={orderInfo}>
              <p>Date: {formatDateTime(order.created)}</p>

              <p>Adresse de livraison: {formatAdress(order.shipping_details.address)}</p>
              <p>
                Methode de payment: {order.payment_details?.card?.brand} - ...
                {order.payment_details?.card?.last4}
              </p>
            </div>

            <div className={productInfo}>
              <h3>Produits</h3>
              <div className={products}>
                {order.line_items.data.map((item) => (
                  <div key={item.id} className={product}>
                    <p>
                      {item.quantity}x {item.description}
                    </p>
                    <p>{formatMoney(item.amount_total)}</p>
                  </div>
                ))}
              </div>
              {order.total_details.amount_discount ? (
                <div>
                  <p>Discount</p>
                  <p>
                    {"\u2013 "}
                    {formatMoney(order.total_details.amount_discount)}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className={shipping}>
                <p>Shipping</p>
                <p>{formatMoney(order.total_details.amount_shipping)}</p>
              </div>
              <div>
                <p>Tax</p>
                <p>{formatMoney(order.total_details.amount_tax)}</p>
              </div>
              <div className={total}>
                <p>Total</p>
                <p>{formatMoney(order.amount_total)}</p>
              </div>
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
