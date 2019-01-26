var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'student', 
    password: 'student',
    database: 'chat'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('ITS MONEY TIIIIIMMMEEE');
    
})

connection.query('INSERT into messages(roomname) values (12);', (err,results,fields)=>{
    if(err){
        throw err;
    }
    else{
        console.log('this is the results ', results)
        console.log('this is the fields ', fields)

    }
} )
// connection.query('SELECT * from messages', (err,results,fields)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log('this is the results ', results)
//         console.log('this is the fields ', fields)

//     }
// } )

module.exports = {
    connection: connection
};


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


