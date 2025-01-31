const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const session = require('express-session');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

let auth_obj = new (require('./model/Auth'))()


// Config
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "N€$=vD6€HxP6vg&U33h2LZ96!;3Q4tm>mRµ",
    saveUninitialized: true,
    resave: true
}))
app.use(async (req, res, next) => {
    req.io = io;
    
    const logged = await auth_obj.isLogged(req);
    req.logged = logged;
    const myID = await auth_obj.getID(req);
    req.myID = myID;
    
    
    next();
});


// Router
const router = require('./routes/routes');
app.use('/', router);


server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});