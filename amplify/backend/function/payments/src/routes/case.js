const express = require("express");
const router = express.Router({mergeParams: true});
require('dotenv').config();
const AWS = require('aws-sdk');

const config = {
  accessKeyId: 'AKIAIPUAVM2FR4TY4XNQ',
  secretAccessKey: process.env.SECRET_KEY_SES,
  region: 'us-west-2',
  adminEmail: 'hellenicamericanhippocratic@gmail.com'
};

// const allUsersEmailArray = req.body.allUsersEmail; //these are all users email
const allUsersTestEmailArray = [config.adminEmail,'p.pp256@yahoo.com', 'p12345vls@gmail.com', 'p123456vls@gmail.com', 'pavlospapadonikolakis@yahoo.com']

const ses = new AWS.SES(config);

router.post('/newcase', (req, res) => {
  const {first_name, last_name, email} = req.body.currentUser;
  const title = req.body.title;

  const testArrayEmails = [email,...allUsersTestEmailArray]

  ses.sendEmail({
    Source: config.adminEmail,
    Destination: {
      ToAddresses: testArrayEmails
    },
    Message: {
      Subject: {
        Data: `New Case posted from ${first_name} ${last_name} `
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
                <div style="max-width: 600px; margin: auto; background-color: #f4f4f4; padding: 20px;">
                    <h3>Subject: New Case posted from ${first_name} ${last_name}  </h3><br>
                      <h4>Title:${title}</h4>   
                        <img src="${req.body.url}" style="cursor: pointer; object-fit: cover"; width="300px" height="300px" />
                        <br>
                        <br>
                        <a
                          href="https://master.d1pn8zj3mxej1a.amplifyapp.com/"
                          style="background-color: #4CAF50;
                          border: none;
                          color: white;
                          padding: 15px 32px;
                          text-align: center;
                          text-decoration: none;
                          font-size: 16px;
                          cursor: pointer;">
                            Go to Case &#8594; 
                          </a>
                 <br>
                 <br>
                 <pre style="color: #2490ff;">Hippocratic Orthopedic Society, Inc</pre>
                </div>
                 `
        }
      }
    }
  }, (err, data) => {
    if (err) {
      return res.status(500).json({error: err})
    }
    res.json({
      message: "Email sent",
      data: req.body
    });
  });
});


//=========================================================================================
router.post('/newcomment', (req, res) => {

  const {first_name, last_name, email} = req.body.currentUser;
  const title = req.body.title;

  const testArrayEmails = [email,...allUsersTestEmailArray]

  ses.sendEmail({
    Source: config.adminEmail,
    Destination: {
      ToAddresses: testArrayEmails
    },
    Message: {
      Subject: {
        Data: `New comment posted from ${first_name} ${last_name} `
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
                <div style="max-width: 600px; margin: auto; background-color: #f4f4f4;padding: 20px;">
                    <h3>Subject: New comment posted from ${first_name} ${last_name} on case ${title}  </h3><br>
                        <img src="${req.body.url}" style="cursor: pointer; object-fit: cover"; width="300px" height="300px" />
                         <p>Comment: ${req.body.description}</p>
                         <br>
                         <br>
                         <a
                          href="https://master.d1pn8zj3mxej1a.amplifyapp.com/"
                          style="background-color: #4CAF50;
                          border: none;
                          color: white;
                          padding: 15px 32px;
                          text-align: center;
                          text-decoration: none;
                          font-size: 16px;
                          cursor: pointer;">
                            Go to comment &#8594; 
                          </a>
                          <br>
                          <br>
                 <pre style="color: #2490ff;">Hippocratic Orthopedic Society, Inc</pre>
                </div>
                 `
        }
      }
    }

  }, (err, data) => {
    if (err) {
      return res.status(500).json({error: err})
    }
    res.json({
      message: "Email sent",
      data: req.body
    });
  });

});


module.exports = router;