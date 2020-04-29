const express = require('express');
const router = express.Router({mergeParams: true});
require('dotenv').config();
const AWS = require('aws-sdk');

const config = {
  accessKeyId: 'AKIAIPUAVM2FR4TY4XNQ',
  secretAccessKey: process.env.SECRET_KEY_SES,
  region: 'us-west-2',
  adminEmail: 'hellenicamericanhippocratic@gmail.com'
};

const ses = new AWS.SES(config);


router.post('/', (req, res) => {
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
                 <pre style="color: #2490ff;">The Hippocratic Society, Inc</pre>`
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

module.exports = router;