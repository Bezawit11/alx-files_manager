
const getStatus = (req, res, next) => {
  res.status(200);
  res.json({ "redis": true, "db": true });
};

const getStats = (req, res, next) => {
    res.status(200);
    res.json({ "users": 12, "files": 1231 });
};

module.exports = {getStatus};
module.exports = {getStats};
