const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51L1BNJSGf8N2MKaAdCpj88awtP24EUKnk09LDd3307QvUrXSb956TgzJmwY9jmhwGkcUXFeemhd4id9OGuxEVUb200qNAYb1d1"
);

// API

// - App config
const app = express();
// const cors = require('cors');
const corsOptions ={
    origin:true, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// - Middlewares
// app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
try{
    const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
}catch(e){
    console.log(e);
}
  
});

// - Listen command
exports.api = functions.https.onRequest(app);