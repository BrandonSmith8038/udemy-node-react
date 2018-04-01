const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'reddirtemail' }, function(err, tunnel) {
  console.log('LT running');
});
