module.exports = {
  postNew: function(req, res){
    res.status(200);
    res.json({ "redis": true, "db": true });
  }
};
