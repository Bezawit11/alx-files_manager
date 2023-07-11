import dbClient from '../utils/db';

module.exports = {
  getStatus: function(req, res){
    res.status(200);
    res.json({ "redis": redisClient.isAlive(), "db": dbClient.isAlive() });
  },
  async getStats: function(req, res){
    res.status(200);
    res.send({ users: await dbClient.nbUsers(), files: await dbClient.nbFiles() });
  }
};
