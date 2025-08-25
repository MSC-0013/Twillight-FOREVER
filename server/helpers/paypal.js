const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",        // must be "sandbox" or "live"
  client_id: "YOUR_CLIENT_ID",      
  client_secret: "YOUR_CLIENT_SECRET",
});

module.exports = paypal;
