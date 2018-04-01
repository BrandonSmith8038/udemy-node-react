# Emaily

### Created By Brandon Smith

This project was created for the course located [HERE](https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/overview)

## Prerequisites

```
npm install -g nodemon
```

```
npm install -g create-react-app
```

## Install

After cloning the project to your local machine:

#### Install the server dependencies

```
npm install
```

#### Install The Client Dependencies

```
cd client
npm install
cd..
```

#### Configuration

In the `SERVER'S` package.json changed the proxy target to reflect the port of your express server. By default it is 5000.

```
"config": { "port": "5000" },
  "proxy": {
    "/auth/google": {
      "target": "http://localhost:*YOUR PORT HERE*"
    },
    "/api/*": {
      "target": "http://localhost:*YOUR PORT HERE*"
    }
  },
```

#### Keys

```
cd client
touch .env.development .env.production
```

In the both files place the stripe publishable as shown

```
REACT_APP_STRIPE_KEY=""
```

```
touch config/dev.js
```

In dev.js Fill in the following fields with the required keys

```
module.exports = {
  googleClientID:'',
  googleClientSecret:'',
  mongoURI:'',
  cookieKey: '',
  stripePublishableKey: '',
  stripeSecretKey: '',
  sendGridKey: '',
  redirectDomain: ''
};
```

## Run The Development Server

From The Project Root

```
npm run dev
```

## Build For Production

From The Project Root

```
npm run build
```

##
