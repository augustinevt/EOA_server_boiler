require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const url = '';
var _db;

module.exports = {
  connectToServer: (cb) => {
    MongoClient.connect(url, (err, db) => {
        _db = db;
        return cb(err);
    })
  },

  getDB: () => {
    return _db;
  },

  ObjectID: (id) => ( new ObjectID(id) )
}