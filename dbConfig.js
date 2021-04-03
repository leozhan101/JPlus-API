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
            // db.close();
        });

        col = dbo.collection(collection);

        const result = col.createIndex({ username: 1 }, { unique: true })

        console.log(`Index created: ${result}`);

        db.close();
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

function update(query, newValue) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        var myquery = query
        var newvalues = { $set: newValue }
        dbo.collection(collection).updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
}


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
async function find(queryObj, projectionObj) {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {
        const db = client.db(dbName);
        let col = db.collection(collection);
        let res = await col.find(queryObj, { projection: projectionObj }).toArray()
        return res
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}


exports.insert = insert;
exports.connectDB = connectDB;
exports.createCollection = createCollection;
exports.update = update;
exports.find = find;



