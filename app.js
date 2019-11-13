const express = require("express");
const app = express();
const server = require('http').createServer(app);
const dotenv = require('dotenv');
const io = require('socket.io')(server);
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


// Config
dotenv.config();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
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
    next();
});


// Router
const router = require('./routes/routes');
app.use('/', router);


server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});