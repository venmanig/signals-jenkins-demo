// Configuration read from the environment. Signals' deploy check lists changes to these.
module.exports = {
  port: Number(process.env.PORT || 3000),
  greeting: process.env.APP_GREETING || 'Hello',
};
