import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../styles/Checkout.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51NNo7pCxuuhmKVVshZNVhskWqW4mHCIyilpxvS1HumR5DoqX9QTQyIaJhXLcvvKfNkumOOOGLl9UAfLmWcc9EIIc00XbexTz5o");


export default function CheckoutContainer() {
  const [clientSecret, setClientSecret] = useState("");
  const compras = useSelector((state) => state.compras)
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: compras }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}