const mostBlogs = require('../utils/list_helper').mostBlogs;
const helper = require('./test_helper');

test('author with most blogs', () => {
  const result = mostBlogs(helper.blogs);
  expect(result).toEqual({
    author: 'Chika Chukwunta',
    blogs: 2,
  });
});
