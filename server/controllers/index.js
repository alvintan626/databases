var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // gets a GET request from browser and handles it
      // calls model.messages.get to produce all the messages
      // call res.send once model.get gives us all the messages
      console.log('the controller has conencted');
      models.messages.get((err, results) => {
        if(err) {
          throw err;
        } else {
          console.log('this is the results ', results);
          res.send(JSON.stringify(results));
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
    }
  }
};

