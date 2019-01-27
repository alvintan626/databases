var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * from messages', (err, results) => {
        if (err) {
          callback(err);
        } else {
          console.log('MODEL REsLTs ', results);
          callback(null, results);
        }
      });
    }, // a function which produces all the messages

    post: function (data, callback) {
      db.connection.query('INSERT into messages SET ?', data, (err, results, fields) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    // a function which can be used to insert a message into the database
    },
  },

  users: {
    // Ditto as above.
    get: function () {},

    post: function () {}
  }
};

