/*
MongoDB operations by nodejs 
This needs mongodb module, can be installed by npm command:
npm install mongodb

The following test requires the MongoDB is running.
*/

var mongo = require('mongodb');
var dbName = 'JPlus';
var collection = 'userInfo'

// connect MongoDB and create database
function connectDB() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/" + dbName;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
}



// // create a collection
function createCollection() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.createCollection(collection, function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
}



// // insert object into collection
function insert(obj) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var myobj = obj;
        dbo.collection(collection).insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

// exports.retrive = retrive;
exports.insert = insert;
exports.connectDB = connectDB;
exports.createCollection = createCollection;



