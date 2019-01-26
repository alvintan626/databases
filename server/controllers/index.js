var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req);
      console.log(res);
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req);
      console.log(res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req);
      console.log(res);
    },
    post: function (req, res) {
      console.log(req);
      console.log(res);
    }
  }
};

