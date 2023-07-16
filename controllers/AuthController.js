import dbClient from '../utils/db'; // eslint-disable-line import/no-named-as-default
import { v4 as uuidv4 } from 'uuid';
import sha1 from 'sha1';
import redisClient from '../utils/redis';

module.exports = {
    async getConnect(req, res) {
      const Auth = request.header('Authorization');
      const t = Auth.split(' ')[1];
      if (!t) {
        return res.status(401).send({ error: 'Unauthorized' });
      }
      const decodedCredentials = Buffer.from(t, 'base64').toString(
      'utf-8',
    );

    const [email, password] = decodedCredentials.split(':');

    if (!email || !password) { return response.status(401).send({ error: 'Unauthorized' }); }

    const sha1Password = sha1(password);

    const user = await userUtils.getUser({
      email,
      password: sha1Password,
    });

    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    const token = uuidv4();
    const key = `auth_${token}`;
    const hoursForExpiration = 24;

    await redisClient.set(key, user._id.toString(), hoursForExpiration * 3600);

    return response.status(200).send({ token });
  },
  };
