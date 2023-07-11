import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', err => console.log('error', err));
    this.client.on('connect', () => {
    });
  }

isAlive() {
  return this.client.connected;
}
}


export const redisClient = new RedisClient();
