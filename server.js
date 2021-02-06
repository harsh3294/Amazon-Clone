const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HgASPKSHXiQDQbdcByV3aCP7FcMuoswucyDoYv2c4SMCgNCq8sJGG1S1dZwbQn4lorAdjbCOojo7rOtr1OwdSHG00x1njdnKG"
);
const port = process.env.PORT || 8001;

// setup api

//App Config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());
//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of the currency
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listener
app.listen(port, () => console.log(`listening on localhost ${port}`));
