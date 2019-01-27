var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // gets a GET request from browser and handles it
      // calls model.messages.get to produce all the messages
      // call res.send once model.get gives us all the messages
      console.log('the controller has retrieved a get message');
      models.messages.get((err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('this is the results ', results);
          res.send(JSON.stringify(results));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // take the data in request and hand it off to models
      // using models.messages.post, we do something to the data
      // once the post is done, we send the response back to the client
      
      console.log('post received from client');
      console.log('this is the req', req.body);
      // var data = [];
      // for(var key in req.body) {
      //   data.push(req.body[key]);
      // }
      models.messages.post(req.body, (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('this is the results from models', results);
          res.send();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // gets a GET request from browser and handles it
      // calls model.messages.get to produce all the messages
      // call res.send once model.get gives us all the messages
      console.log('the controller has retrieved a get message');
      models.messages.get((err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('this is the results ', results);
          res.send(JSON.stringify(results));
        }
      });
    },
    post: function (req, res) {
      // take the data in request and hand it off to models
      // using models.messages.post, we do something to the data
      // once the post is done, we send the response back to the client
      
      console.log('post received from client');
      console.log('this is the req', req.body);
      // var data = [];
      // for(var key in req.body) {
      //   data.push(req.body[key]);
      // }
      models.messages.post(req.body, (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log('this is the results from models', results);
          res.send();
        }
      });
    }
  }
};

