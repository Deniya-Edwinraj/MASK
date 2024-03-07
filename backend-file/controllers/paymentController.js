import asyncHandler from 'express-async-handler';
import stripe from 'stripe';

// Process stripe payments   
const processPayment = asyncHandler(async(req,res)=>{
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })
})

const sendStripApi = asyncHandler(async(req,res)=>{
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })
})

export {processPayment, sendStripApi};