"use strict";
exports.__esModule = true;
var express = require('express');
// var router = express.router;
var providers = require('./router/providerRouter');
var contacts = require('./router/contactService');
var notes = require('./router/noteService');
var users = require('./router/userService');

var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/providers', providers); // access the providers table
app.use('/contacts', contacts); // accesses the contacts table -- potentially extend to /contacts/:providerid for only contacts for that providerid and /contacts/:providerid/:contactid for specific contact
app.use('/notes', notes); // accesses the notes table -- potentiall extend to /notes/:providerid for contacts for specificy provider and /notes/:providerid/:noteid for specific note
app.use('/users', users); // accesses authentication table -- potentially extend to /users/:userid for provider


// start listening on port 5433
var server = app.listen(5433, () => {
    return console.log("listening on " + server.address().address + ":" + server.address().port);
});