const mostLikes = require('../utils/list_helper').mostLikes;
const helper = require('./test_helper');

test('author with most likes', () => {
  const result = mostLikes(helper.blogs);
  expect(result).toEqual({
    author: 'Chika Chukwunta',
    likes: 379,
  });
});
