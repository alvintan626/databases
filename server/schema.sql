CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id int auto_increment primary key, username int, text varchar(20), roomname int);
CREATE TABLE rooms (id int auto_increment primary key, roomname char(15));
CREATE TABLE users (id int auto_increment primary key, username char(15));
CREATE TABLE users_rooms (id int auto_increment primary key, user_id int, room_id int);
  /* Describe your table here.
    1. Create MAIN table called messages
      -columns include
        id, username, text, and roomname
   2. Create room table called room
        id, and roomname
   3. Create user table called Users
        id and username
   4. Create user/room table -- JOIN Table
        id, user_id, and room_id

  
  */


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

