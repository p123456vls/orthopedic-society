const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
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
          Data: `<h3>Re: Hippocratic Orthopaedic Society Membership Dues - Automatic Membership Dues Renewal!</h3><br>
                 <p>Dear ${charge.billing_details.name},</p>
                 <p>
                 Thank you for your membership with the Hippocratic Society. The Board of Directors 
                 thanks you for your continued commitment to our growing society. You have paid your
                 membership fees for this year and you should have received a receipt. 
                 That receipt can be used for in your tax return as a donation. As you know our
                 society has received IRS approval as a non profit organization.
                </p><p>
                This correspondence is to inform you that your membership dues for the Hippocratic Orthopaedic
                 Society are currently scheduled for automatic renewal. When paying your prior dues, you chose 
                 the option to have your dues automatically renewed. Members who are signed up for automatic
                  payment will have their dues automatically paid 365 days after date of initiation to the society. 
                  Payments will be processed using the card used to pay your previous year Dues. If you wish to use a 
                  different card for your dues payment, please make your future payments by logging into 
                  <a href="https://www.hippocraticsociety.org/">www.hippocraticsociety.org. </a> If you wish to be removed from automatic payment, 
                  please reply to this email with your request to be removed before September 1st, of this year.
                 </p>
                 <p>
                 Please email me with any research activities, fellowship opportunities, news about your professional life,
                  presentations that you gave to National or International Meetings that can be published and distributed 
                  through our Newsletter.
                 </p>
                 <br>
                 <p>Benefits of Membership include:</p>
                 <ul>
                   <li>International Networking & Global Perspective</li>
                   <li>Annual Hippocratic Society Meeting Participation during the AAOS</li>
                   <li>Invitations to give lectures in Greece and the US - in progress</li>
                   <li><a href="https://www.isakos.com/GlobalLink/">
                        Orthopaedic Case: Online platform to post clinical cases for discussion or advise
                       </a></li>
                   <li> <a href="https://www.isakos.com/GlobalLink/Newsletter/">Newsletter</a> </li>
                   <li>Serve on the Board of Director and the right to vote (Active Members)</li>
                 </ul>
                   <br>
                   <p>Please be advised that your dues must be paid in full to have access to these member benefits.</p>
                   <p> We appreciate your membership and as our society expands member benefits we look forward to our continued relationship.</p>
                   <p>Please do not hesitate to contact me or the Board of Directors if you require any assistance.  </p>
                   <p>Sincerely,</p>
                
                 <pre style="color: #2490ff;">The Hippocratic Orthopaedic Society, Inc</pre>`
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
      message: "Email received",
      data: req.body
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

