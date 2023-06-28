module.exports = {
  getStatus: function(req, res){
    res.status(200);
    res.json({ "redis": true, "db": true });
  },
  getStats: function(req, res){
    res.status(200);
    res.json({ "users": 12, "files": 1231 });
  }
};
