// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

const stripe = require('stripe');
const express = require('express');
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_dDbnTUGSGzK1C0IyWw8AhFzv042jrHgR";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

// Successfully constructed event
console.log('✅ Success:', event.id);

 // Handle the event
 switch (event.type) {
    case 'account.updated':
      const account = event.data.object;
      // Then define and call a function to handle the event account.updated
      break;
    case 'payment_intent.created':
       const paymentIntent = event.data.object;
       console.log(`payment intent created ${paymentIntent.body}`);
      // Then define and call a function to handle the event payment_intent.created
      break;
    case 'payment_intent.succeeded':
        paymentIntent = event.data.object;
       console.log(`payment intent succeeded ${paymentIntent.body}`);
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();

// Return a response to acknowledge receipt of the event
res.json({received: true});
});

app.listen(3000, () => console.log('Running on port 3000'));