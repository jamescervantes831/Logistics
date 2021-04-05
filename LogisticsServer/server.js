"use strict";
exports.__esModule = true;

var express = require('express');
var app = express();

var cors = require('cors');


var providerRouter = require('./router/providerRouter');
var contactRouter = require('./router/contactRouter'); 
var noteRouter = require('./router/noteRouter');
var userRouter = require('./router/userRouter');
var titleRouter = require('./router/titleRouter');


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/providers', providerRouter); // access the providers table
app.use('/contacts', contactRouter); // accesses the contacts table -- potentially extend to /contacts/:providerid for only contacts for that providerid and /contacts/:providerid/:contactid for specific contact
app.use('/notes', noteRouter); // accesses the notes table -- potentiall extend to /notes/:providerid for contacts for specificy provider and /notes/:providerid/:noteid for specific note
app.use('/users', userRouter); // accesses authentication table -- potentially extend to /users/:userid for provider
app.use('/titles', titleRouter);


// start listening on port 5433
var server = app.listen(5433, () => {
    return console.log("listening on " + server.address().address + ":" + server.address().port);
});