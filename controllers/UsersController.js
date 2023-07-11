import sha1 from 'sha1';
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

module.exports = {
  async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      return response.status(400).send({ error: 'Missing email' });
    }
    if (!password) {
      return response.status(400).send({ error: 'Missing password' });
    }
    const a = await dbClient.users1.findOne({ email });
    if (a) {
      return response.status(400).send({ error: 'Already exist' });
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
    return response.status(201).send(user);
  },
};
