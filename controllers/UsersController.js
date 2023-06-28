import sha1 from 'sha1';
import Queue from 'bull/lib/queue';
import dbClient from '../utils/db';

module.exports = {
  postNew: function(req, res){
    const h = req.headers;
    const email = h.get('email');
    const password = h.get('password');
    if (email === 'undefined') {
      res.status(400);
      res.send('Missing email');
    }
    if (email === 'undefined') {
      res.status(400);
      res.send('Missing password');
    }
    const a = db.student.find({'email':h.get('email')});
    if (a === 'undefined') {
      res.status(400);
      res.send('Already exist');
    }
     const insertion1 = await (await dbClient.usersCollection())
      .insertOne({ email, password: sha1(password) });
    const user_Id = insertion1.insertedId.toString();
    res.status(201);
    res.json({email, id:user_id});
  }
};
