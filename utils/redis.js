import redis from 'redis';

class RedisClient {
  constructor() {
    this.client = redis.createClient();
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

export const redisClient = new RedisClient();
