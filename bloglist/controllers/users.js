const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.find({}).populate('blogs', {
      url: 1,
      title: 1,
      author: 1,
    });
    res.json(users.map(u => u.toJSON()));
  } catch (error) {
    next(error);
  }
});

usersRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body;

    if (body.username.length < 3 || body.password.length < 3) {
      return res
        .status(400)
        .json({ error: 'username or password must be at least 3 characters' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const newUser = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user.toJSON());
  } catch (error) {
    next(error);
  }
});

usersRouter.put('/:id', async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser.toJSON());
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
