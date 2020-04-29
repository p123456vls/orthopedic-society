const express = require('express');
const router = express.Router({mergeParams: true});
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/', async (req, res) => {
  let customer;
  try {
    customer = await stripe.customers.create(
      {
        id: req.body.id,
        email: req.body.email,
        name: `${req.body.first_name}  ${req.body.last_name}`,
        description: req.body.description,
        metadata: req.body.metadata
      });
    await res.json({body: req.body, response: customer});
  } catch (e) {
    return res.json({error: e.raw.message});
  }

});

router.get('/list', async (req, res) => {
  try {
    const list = await stripe.subscriptions.list({limit: 10000});
    res.json(list);
  } catch (e) {
    return res.json({errorDisplayAllSubscriptions: e.raw.message});
  }
});


module.exports = router;
