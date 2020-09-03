const functions = require('firebase-functions');
const cors = require('cors')({
  origin: [/\.ballot\.fyi$/],
  methods: ['POST']
});
const axios = require('axios');
const crypto = require('crypto');

//-- Test call in Firebase Functions shell: 
// subscribeEmail.post('/').form({email:'jimmychion@gmail.com'})
/** send a request to this function from the origins whitelisted
 * to subscribe an email address to ballotfyi's audience
 * 
 * Follows this guide: https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/
 * and assumes that those who have unsubscribed but reentering their email
 * wish to have their information updated
 */ 
exports.subscribeEmail = functions.https.onRequest( async (req, res) => {
  return cors(req, res, async () => {   
    if(!req.secure) {
      res.sendStatus(501);
    }
    const { email } = req.body;
    if (!email) {
      res.sendStatus(401);
    }
    let doesExistRes;
    let doesExist = false;
    try {
      doesExistRes = await sendMailchimpRequest({
        type: 'check existence',
        targetEmail: email,
      });
      if (doesExistRes && doesExistRes.status === 200) {
        doesExist = true;
      }
    } catch (err) {
      if (err && err.response && err.response.status !== 404) {
        res.sendStatus(500);
        return;
      }
    }

    let subscribeType = null;
    if (doesExist) {
      const currentStatus = doesExistRes.data.status; //['subscribed', 'unsubscribed', 'cleaned', 'pending', 'archived']
      console.log('Existing member: ', currentStatus);
      switch (currentStatus) {
        case 'cleaned':
        case 'unsubscribed':
        case 'archived':
          subscribeType = 'update';
          break;
        // in all other cases, simply send back to client that the user is already subscribed
        case 'pending':
        case 'subscribed':
        default:
          res.status(200).send(currentStatus);
          break;
      }
    } else {
      subscribeType = 'subscribe';
    }

    if (subscribeType) {
      let subRes;
      try {
        subRes = await sendMailchimpRequest({
          type: subscribeType,
          targetEmail: email,
        });
        if (subRes && subRes.status === 200) {
          res.status(200).send(subscribeType);
        } else {
          res.sendStatus(500);
        }
      } catch (err) {
        console.warn(`Error trying to ${subscribeType}`);
        res.sendStatus(500);
      }
    }
  })
});

function sendMailchimpRequest(params) {
  const { type, targetEmail } = params;
  const audienceId = functions.config().mailchimp.id;
  const key = functions.config().mailchimp.key;
  const dc = 'us14'; //-- data center, found at end of api key
  const emailHash = crypto.createHash('md5').update(targetEmail).digest('hex');
  const baseEndpoint = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;
  let method = 'GET';
  let data = null;
  let endpoint = baseEndpoint;
  if (type === 'check existence') {
    method = 'GET';
    endpoint = baseEndpoint + emailHash;
  } else if (type === 'subscribe') {
    method = 'POST';
    endpoint = baseEndpoint;
    data = {
      email_address: targetEmail,
      status: 'subscribed',
    };
  } else if (type === 'update') {
    method = 'PATCH';
    endpoint = baseEndpoint + emailHash;
    data = {
      status: 'subscribed',
    };
  }

  return axios({
    url: endpoint,
    method: method,
    auth: {
      username: 'api',
      password: key,
    },
    data: data,
  });
}
