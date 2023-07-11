import { MongoClient } from 'mongodb';

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database_ = process.env.DB_DATABASE || 'files_manager';
const ourUrl = `mongodb://${host}:${port}/${database_}`;

class DBClient {
  constructor() {
    this.client = MongoClient(ourUrl, { useUnifiedTopology: true });
    this.client.connect();
    this.DB = this.client.db(database_);
    this.users1 = this.DB.collection('users');
    this.files1 = this.DB.collection('files');
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.users1.countDocuments({});
  }

  async nbFiles() {
    return this.files1.countDocuments({});
  }

  async usersCollection() {
    return this.client.db().collection('users');
  }
}

export const dbClient = new DBClient();
export default dbClient;
