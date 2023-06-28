import mongodb from 'mongodb';
import Collection from 'mongodb/lib/collection';
import envLoader from './env_loader';

class DBClient {
  constructor() {
    envLoader();
    const host = process.env.DB_HOST || 'localhost'
    const port = process.env.DB_PORT || 27017
    const database = process.env.DB_DATABASE || 'files_manager'
    const url = `mongodb://${host}:${port}/${database}`;
    this.client = mongodb.MongoClient(url, { });
    this.client.connect();
  }

isAlive() {
  return this.client.isConnected();
}
}

export const dbClient = new DBClient();
