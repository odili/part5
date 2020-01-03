const totalLikes = require('../utils/list_helper').totalLikes;
const helper = require('./test_helper');

test('total likes 0', () => {
  const listOfBlogs = [];

  const result = totalLikes(listOfBlogs);
  expect(result).toBe(0);
});

test('total likes 2 blogs', () => {
  const likes = helper.blogs.map(b => b.likes);
  const result = totalLikes(helper.blogs);
  expect(result).toBe(likes.reduce((a, c) => a + c));
});
