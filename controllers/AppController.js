import dbClient from '../utils/db';
import redisClient from '../utils/redis';

module.exports = {
  getStatus: function(req, res){
    res.status(200);
    res.json({ "redis": redisClient.isAlive(), "db": dbClient.isAlive() });
  },
  getStats: async function(req, res){
    res.status(200);
    res.send({ users: await dbClient.nbUsers(), files: await dbClient.nbFiles() });
  }
};
