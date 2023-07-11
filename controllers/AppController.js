import dbClient from '../utils/db';

module.exports = {
  getStatus: function(req, res){
    res.status(200);
    res.json({ "redis": redisClient.isAlive(), "db": dbClient.isAlive() });
  },
  getStats: function(req, res){
    res.status(200);
    res.send({ users: dbClient.nbUsers(), files: dbClient.nbFiles() });
  }
};
