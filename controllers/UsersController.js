import sha1 from 'sha1';
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

const userQueue = new Queue('userQueue');
module.exports = {
  async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).send({ error: 'Missing email' });
    }
    if (!password) {
      return res.status(400).send({ error: 'Missing password' });
    }
    const a = await dbClient.users1.findOne({ email });
    if (a) {
      return res.status(400).send({ error: 'Already exist' });
    }
    const r = await dbClient.users1
      .insertOne({ email, password: sha1(password) });
    const user = {
      id: r.insertedId,
      email,
    };
    await userQueue.add({
      userId: r.insertedId.toString(),
    });
    return res.status(201).send(user);
  },
};
