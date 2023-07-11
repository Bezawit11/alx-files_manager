import sha1 from 'sha1';
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

module.exports = {
  postNew(req, res) {
    const { email, password } = req.body;
    if (email === 'undefined') {
      res.status(400);
      res.send('Missing email');
    }
    if (password === 'undefined') {
      res.status(400);
      res.send('Missing password');
    }
    const a = await dbClient.usersCollection().findOne({ email });
    if (a === 'undefined') {
      res.status(400);
      res.send('Already exist');
    }
    const insertion1 = dbClient.usersCollection()
      .insertOne({ email, password: sha1(password) });
    const user_id = insertion1.insertedId.toString();
    res.status(201);
    res.json({ email, id: user_id });
  },
};
