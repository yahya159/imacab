'use client'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import React from 'react'
import CheckoutForm from './_components/CheckOutForm';

const stripePromise = loadStripe('process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY');
function Checkout() {
    const options = {
        mode : 'payment',
        currency : 'mad',
        amount : 1000,
    }
    return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      );
}

export default Checkout
