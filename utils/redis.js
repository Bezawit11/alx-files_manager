import redis from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.client.on('error', err => console.log('error', err));
    this.client.on('connect', () => {
    });
  }

  isAlive() {
    return this.client.connected;
  }
  }

  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

const redisClient = new RedisClient();

export default redisClient;

