module.exports = async (req, res) => {
  console.log("lambda2: Oh, so much to be done! Let's start immediately!");
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('lambda2: Nothing was done successfully!');
      res.end('Nothing was done successfully!');
      resolve();
    }, 2000);
  });
};
