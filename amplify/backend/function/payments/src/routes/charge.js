const express = require("express");
const router = express.Router({mergeParams: true});
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const AWS = require('aws-sdk');

const config = {
  accessKeyId: 'AKIAIPUAVM2FR4TY4XNQ',
  secretAccessKey: process.env.SECRET_KEY_SES,
  region: 'us-west-2',
  adminEmail: 'hellenicamericanhippocratic@gmail.com'
};

const ses = new AWS.SES(config);


// refers to donation or any other payment (not subscription payment)
const chargeHandler = async (req, res, next) => {
  const {token, metadata} = req.body;
  const {currency, amount, description} = req.body.charge;

  try {
    const charge = await stripe.charges.create({
      source: token.id,
      amount,
      currency,
      description,
      receipt_email: token.email,
      metadata: metadata
    });
    // await res.json(charge);
    if (charge.status === 'succeeded') {
      req.charge = charge;
      req.description = description;
      req.customerEmail = token.email;
      next();
    }

  } catch (e) {
    res.status(500).json({error: e});
  }
};

// donation email
const chargeEmailHandler = (req, res) => {
  const {charge, customerEmail} = req;

  ses.sendEmail({
    Source: config.adminEmail,
    Destination: {
      ToAddresses: [config.adminEmail, customerEmail]
    },
    Message: {
      Subject: {
        Data: 'Payment Details'
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
              <h3>Re: Hippocratic Orthopaedic Society Donation </h3><br>
              <p>Dear ${charge.billing_details.name},</p>
              <p>Thank you for your donation ! </p>
              <p>Your payment of $${(parseFloat(charge.amount) / 100).toFixed(2)}
                      has been processed successfully!</p><br>
              <pre style="color: #2490ff;">The Hippocratic Orthopaedic Society, Inc</pre>
          `
        }
      }
    }

  }, (err, data) => {
    if (err) {
      return res.status(500).json({error: err})
    }
    res.json({
      message: "Payment Processed Successfully",
      charge,
      data
    });
  });
};

// for any payment or for donation (not for subscription payment)
router.post('/', chargeHandler, chargeEmailHandler);


module.exports = router;
