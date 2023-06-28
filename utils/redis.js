import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.is_alive = false;
    this.client.on('error', err => console.log('error', err));
    this.client.on('connect', () => {
      this.is_alive = true;
    });
  }

isAlive() {
  return this.is_alive;
}
}


export const redisClient = new RedisClient();
