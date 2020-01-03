const favoriteBlog = require('../utils/list_helper').favoriteBlog;

test('Highest liked blog', () => {
  const blogs = [
    {
      _id: '5e062dbab97bce0001dbc46f',
      title: 'Zero config developemt',
      author: 'Chika Chukwunta',
      url: 'https://dev.nubiit.com',
      likes: 125,
      __v: 0,
    },
    {
      _id: '5e062e5cb97bce0001dbc470',
      title: 'Chasing the wind',
      author: 'Janet Chukwunta',
      url: 'https://dev.nubiit.com',
      likes: 180,
      __v: 0,
    },
  ];
  const result = favoriteBlog(blogs);
  expect(result).toEqual({
    title: 'Chasing the wind',
    author: 'Janet Chukwunta',
    likes: 180,
  });
});
