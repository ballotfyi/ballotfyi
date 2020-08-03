const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
 * Unpublished function for manually modifing custom claims
 * Don't forget to export export GOOGLE_APPLICATION_CREDENTIALS
 * and to `firebase use` the right project
 * 
 * example call: updateCustomClaims({email: 'blah@blah.com', claim: {editor: true, is_verified: true}})
 * 
 * NOTE TO SELF: if you decide to publish in future add check that caller of this function
 * has the appropriate permissions to promote other users. i.e. check that auth exists and is an admin.
 */

exports.updateCustomClaims = functions.https.onCall( (data, { auth }) => {
  admin.auth().getUserByEmail(data.email).then((user) => {
    if (user.emailVerified) {
      return admin.auth().setCustomUserClaims(user.uid, data.claim);
    }
  })
  .catch((error) => {
    console.log(error);
  });
})