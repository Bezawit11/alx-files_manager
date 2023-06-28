const redis = require("redis");
let client = redis.createClient();
client.on('error', err => console.log('error', err));

