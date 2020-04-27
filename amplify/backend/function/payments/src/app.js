const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

// routes ================================================
const chargeRoutes = require('./routes/charge');
const subscriptionRoutes = require('./routes/subscription');
const customerRoutes = require('./routes/customer');
const contactRoutes = require('./routes/contact');
// caseRoutes are made to send emails to
// all members when a new post or comment is created
// and it has nothing to do with payments
const caseRoutes = require('./routes/case');

// ======================================================
app.use('/',caseRoutes);
app.use("/charge", chargeRoutes);
app.use("/customer", customerRoutes);
app.use("/subscription", subscriptionRoutes);
app.use("/contact", contactRoutes);
// ====================================================

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;

