import sha1 from 'sha1';
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

module.exports = {
  async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(400);
      res.send('Missing email');
    }
    if (!password) {
      res.status(400);
      res.send('Missing password');
    }
    const a = await dbClient.users1.findOne({ email });
    if (!a) {
      res.status(400);
      res.send('Already exist');
    }
    const insertion1 = dbClient.users1
      .insertOne({ email, password: sha1(password) });
    const user_id = insertion1.insertedId.toString();
    res.status(201);
    res.send({ email, id: user_id });
  },
};
