"use strict";
exports.__esModule = true;
var express = require('express');
var pg_1 = require("pg");
var connectionString = "postgresql://logisticsapp@logistics-db:brightrace@logistics-db.postgres.database.azure.com/logisticsdb";
var app = express();

app.get('/providers', (req, res) => {
    /* this is the basic setup for connecting to the database */
    var queryString = "SELECT * FROM Titles";
    var client = new pg_1.Client(connectionString);
    var result;
    client.connect();
    client.query(queryString, function(err, qres) {
        if (err)
            console.log(err); // for testing, we will handle errors here
        result = qres;
        console.log(); // just for testing to see respons in console
        res.send(qres.rows) // return the response here ( qres.rows will contain the actual data)
        client.end(); // NEVER FORGET TO END THE CLIENT!!!!
    });
    return; // we can return true/false or whatever we want to the backend server
});

app.get('/providers/:id', (req, res) => {
    c.send("sending service provider with id: " + req.params.id);
});
app.get('/providers/:id/contact', (req, res) => {
    res.send("Sending client list for provider with id: " + req.params.id);
});

// start listening on port 5433
var server = app.listen(5433, () => {
    return console.log("listening on " + server.address().address + ":" + server.address().port);
});