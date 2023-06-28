require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost'
    const port = process.env.DB_PORT || 27017
    const database = process.env.DB_DATABASE || 'files_manager'
    const url = `mongodb://${host}:${port}/${database}`;
    this.client = MongoClient.connect(url, function(err, db) {
      console.log("Database created!");
      db.close();
    });
  }

isAlive() {
  return this.client.isConnected();
}
}

export const dbClient = new DBClient();
