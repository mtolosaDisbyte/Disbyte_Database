const express = require('express');
const app = express();
const {join} = require("path");
const session = require('express-session');
const method = require('method-override');
const cookie = require('cookie-parser')
const sessionMiddleware = require("./middlewares/user")
const islogged =require("./middlewares/islogged")

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

app.use(sessionMiddleware)
app.use(islogged)
app.use(cookie())

//Routers
const colaboradoresRouter = require('./routes/colaboradores');
const usersRouter = require('./routes/users');
const middleware = require('./middlewares/userAdmin');
app.use('/', colaboradoresRouter);
app.use('/users', usersRouter);
app.use("/api", require('./routes/api/colaboradoresApiRoutes'));
app.use("/api/", require('./routes/api/usuariosApiRoutes'));

//json
app.use(express.json());