const delegate = require('../lib/delegate');
module.exports = async (req, res) => {
  // let host = req.headers['x-now-deployment-url'];
  let host = 'now-lambda-fire-and-forget.yurigor.now.sh';
  console.log('lambda1: started', host);
  await delegate(
    host,
    '/api/lambda2.js',
    'Hey, you, λ2! Did you hear an order?'
  );
  console.log('lambda1: finished', host);
  res.end('Yes, my Master! Will be done!');
};
