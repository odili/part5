const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');
const User = require('../models/user');
const helper = require('./test_helper');

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  const blogs = helper.blogs.map(blog => new Blog(blog));
  const promiseArray = blogs.map(blog => blog.save());
  await Promise.all(promiseArray);
});

test('blogs fetched and returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('verify that unique identifier is named id', async () => {
  const blogs = await helper.blogsFromDb();
  // const blog = blogs[0];
  // console.log(blogs);
  expect(blogs[0].id).toBeDefined();
});

test('new blog can be created', async () => {
  const newBlog = {
    title: '2020 favourite techs',
    author: 'Janet Chukwunta',
    url: 'https://dev.nubiit.com',
    likes: 23,
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogsAfter = await helper.blogsFromDb();
  expect(blogsAfter.length).toBe(helper.blogs.length + 1);

  const titles = blogsAfter.map(t => t.title);
  expect(titles).toContain('2020 favourite techs');
});
test('missing likes property default to 0', async () => {
  const newBlog = {
    title: 'techs to watch 2020 and beyond',
    author: 'Chika Chukwunta',
    url: 'https://dev.nubiit.com',
  };

  await api.post('/api/blogs').send(newBlog);

  const blogsAfter = await helper.blogsFromDb();

  const addedBlog = blogsAfter.find(
    t => t.title === 'techs to watch 2020 and beyond'
  );
  expect(addedBlog.likes).toBe(0);
});

test('missing title and url', async () => {
  const newBlog = {
    title: '',
    author: 'Chika Chukwunta',
    url: '',
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400);
});

describe('user validations', () => {
  test('invalid user not created', async () => {
    const newUser = {
      username: 'la',
      name: 'Lakuna Maduga',
      password: 'halfofeight',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
