const express = require("express");
const app = express();

const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'test',
    database : 'GIFTr'
  }
});

db.select("*").from("users").then(data => {
  console.log(data);
});

app.post("/register", (req,res) => {
  const { email, firstname, lastname, password } = req.body;
  
  
  
  db("users").insert({
    email: email,
    firstname: firstname,
    lastname: lastname
  });

  db("login").insert({
    email: email,
    hash: password
  })
})

app.get('/' , (req,res) => {
  res.send("Hello World").json();
})

app.listen(3001);

/*

  / --> GET --> res server running
  /lists/:userid --> GET --> res lists for userid
  /sharedlists/userid --> GET --> res lists shared to userid
  /signin --> POST --> res user
  /register --> POST --> res user
  /createlist --> POST --> res list
  /updatepassword/:userid --> POST --> res user 
  /createlistitem/:listid/ --> POST --> res list item
  /updatelist/:listid --> PUT --> res list
  /updatelistitem/:listid/:listitemid --> PUT --> res list item
  /updateuser/:userid --> PUT --> res user

 */