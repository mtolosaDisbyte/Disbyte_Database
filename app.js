const express = require('express');
const app = express();
const {join} = require("path");
const session = require('express-session');
const method = require('method-override');
const cookie = require('cookie-parser')

//server
app.listen(3000, () => {
    console.log('listening on port')
})

//Template Engine
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));

//statics
const {static} = require("express");
app.use(static(join(__dirname, "./public")));

//url encoded, method override 
app.use(express.urlencoded({extended:true}));
app.use(method('m'))

app.use(session({
    secret:'DisbyteDB',
    resave:false,
    saveUninitialized:false,
}))

//Routers
const colaboradoresRouter = require('./routes/colaboradores');
const usersRouter = require('./routes/users');
app.use('/', colaboradoresRouter);
app.use('/users', usersRouter);

//json
app.use(express.json());