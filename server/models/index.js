var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connection.query('SELECT * from messages', (err,results,fields)=>{
        if(err) {
          throw err;
        } else {
          console.log('success');
        }
      });
    }, // a function which produces all the messages
    post: function () {
      db.connection.query('SELECT * from messages', (err,results,fields)=>{
        if(err) {
          throw err;
        } else {
          console.log('success');
        }
      });
    }
     // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

