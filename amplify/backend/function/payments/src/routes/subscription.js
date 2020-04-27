const express = require('express');
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

const createPaymentMethod = async (req, res, next) => {
  const {token, customer, user} = req.body;
  let method;
  try {
    method = await stripe.paymentMethods.create(
      {
        type: 'card',
        card: {token: token}
      });
    //await res.json({result: method})

    req.paymentMethod = method.id;
    req.customer = customer;
    req.user = user;
    next();

  } catch (e) {
    return res.json({createPaymentMethodError: e})
  }
};

const attachPaymentMethod = async (req, res, next) => {
  const {paymentMethod, customer, user} = req;

  try {
    await stripe.paymentMethods.attach(
      paymentMethod, {customer: customer}
    );
    req.paymentMethod = paymentMethod;
    req.customer = customer;
    req.user = user;
    next();

  } catch (e) {
    return res.json({attachPaymentMethodError: e})
  }
};

const subscription = async (req, res) => {
  const {customer, paymentMethod, user} = req;
  let membershipSubscription;
  try {
    membershipSubscription = await stripe.subscriptions.create({
      customer: customer,
      items: [{plan: 'plan_HAeZCwVCf2LNfI'}],
      default_payment_method: paymentMethod,
      metadata: user
    });
    await res.json({response: membershipSubscription});
  } catch (e) {
    return res.json({membershipSubscription: e})
  }
};

router.post('/', createPaymentMethod,
  attachPaymentMethod, subscription);

// send membership email after subscription paid
router.post('/membershipEmail', (req, res) => {
  const {name, amount, customerEmail} = req.body;
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
          Data:
            `<h3>Re: Hippocratic Orthopaedic Society Membership Dues - Automatic Membership Dues Renewal!</h3><br>
               <p>Dear ${name},</p>
                 <p>
                   Thank you for your membership with the Hippocratic Society. The Board of Directors 
                   thanks you for your continued commitment to our growing society. You have paid your
                   membership fees for this year and you should have received a receipt. 
                   That receipt can be used for in your tax return as a donation. As you know our
                   society has received IRS approval as a non profit organization.
                </p>
                <p>
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
                   <li>
                      <a href="https://www.isakos.com/GlobalLink/">
                        Orthopaedic Case: Online platform to post clinical cases for discussion or advise
                       </a>
                   </li>
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
      data
    });
  });

});

module.exports = router;
