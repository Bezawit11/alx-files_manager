import mongodb from 'mongodb';
import Collection from 'mongodb/lib/collection';
import envLoader from './env_loader';

class DBClient {
  constructor() {
    envLoader();
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const our_url = `mongodb://${host}:${port}/${database}`;
    this.client = mongodb.MongoClient(our_url, { useUnifiedTopology: true });
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.client.users.countDocuments({});
  }

  async nbFiles() {
    return this.filesCollection.countDocuments();
  }

  async usersCollection() {
    return this.client.db().collection('users');
  }

}

export const dbClient = new DBClient();
export default dbClient;
