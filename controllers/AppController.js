import dbClient from '../utils/db'; // eslint-disable-line import/no-named-as-default
import redisClient from '../utils/redis';

module.exports = {
  getStatus(req, res) {
    res.status(200);
    res.json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  },
  async getStats(req, res) {
    res.status(200);
    res.send({ users: await dbClient.nbUsers(), files: await dbClient.nbFiles() });
  },
};
