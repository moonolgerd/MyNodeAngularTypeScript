import express = require('express');
var app = express();
import mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/myproject';

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
    },
    express.static('.')
);

app.get('/results', (req, res) => {
    mongoClient.connect(url, function (err, db) {
        console.log("Connected correctly to server");
        findDocuments(db, function () {
            db.close();
        });
    });
});

var insertDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
}

var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        console.log("Found the following records");
        console.dir(docs)
        callback(docs);
    });
}

app.get('/', (req, res) => res.sendfile('app/index.html'));

app.listen(8000);