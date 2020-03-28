const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
require('dotenv').config();
const stripe = require('stripe')("sk_test_W8AS0WR7K5XiN5aP9h6qe0jo00ev9aMxC8");
const AWS = require('aws-sdk');

const config = {
  accessKeyId: 'AKIAIPUAVM2FR4TY4XNQ',
  secretAccessKey: process.env.SECRET_KEY_SES,
  region: 'us-west-2',
  adminEmail: 'hellenicamericanhippocratic@gmail.com'
};

const ses = new AWS.SES(config);

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

const chargeHandler = async (req, res, next) => {
  const {token,metadata} = req.body;
  const {currency, amount, description} = req.body.charge;

  try {
    const charge = await stripe.charges.create({
      source: token.id,
      amount,
      currency,
      description,
      receipt_email: token.email,
      metadata:metadata
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

const emailHandler = (req, res) => {
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
          Data: `<h3>Payment Processed Successfully!</h3><br>
                 <p>Dear ${charge.billing_details.name},</p>
                 <p>Your payment of $${(parseFloat(charge.amount) / 100).toFixed(2)}
                    has been processed successfully!</p><br>
                 <pre style="color: #2490ff;">The Hellenic American Hippocratic Society</pre>`
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

//get all users already paid
app.get('/list', async (req, res) => {
  try {
    const list = await stripe.charges.list({limit: 10000});
    res.json(list);
  } catch (e) {
    return res.status(500).json({error: e})
  }
});

// post new charge and send email to user and admin email
app.post('/charge', chargeHandler, emailHandler);


app.post('/contact', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    message
  } = req.body;
  ses.sendEmail({
    Source: config.adminEmail,
    Destination: {
      ToAddresses: [config.adminEmail, email]
    },
    Message: {
      Subject: {
        Data: `Message from ${firstName} ${lastName}`
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<h3>Subject</h3><br>
                 <p>Message:<br>${message}</p> <br>
                 <pre style="color: #2490ff;">The Hellenic American Hippocratic Society</pre>`
        }
      }
    }

  }, (err, data) => {
    if (err) {
      return res.status(500).json({error: err})
    }
    res.json({
      message: "Payment Processed Successfully",
      data:req.body
    });
  });
});


app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;

