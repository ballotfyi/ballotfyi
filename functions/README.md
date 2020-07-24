# Firebase functions

## Test locally
```sh
npm i -g firebase-tools
```

```sh
# use the right node
nvm use

npm install
firebase login
firebase use default

# export functions:config to local file if what you're testing needs it
firebase functions:config:get > .runtimeconfig.json

# replace with actual path
# if you need creds, see: https://firebase.google.com/docs/functions/local-emulator
export GOOGLE_APPLICATION_CREDENTIALS="PATH/TO/JSONKEY"

npm run shell
```

## Deploy
```sh
firebase use prd

firebase deploy --only functions
# or
firebase deploy --only functions:functionName
```

Note that if you store things in `functions:config`, you need to do so for both `prd` and `dev` (i.e. switch with `firebase use prd` and repeat the command to set the key value pairs.
