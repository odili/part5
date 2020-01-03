const Blog = require('../models/blog');
const blogs = [
  {
    title: 'Zero config developemt',
    author: 'Chika Chukwunta',
    url: 'https://dev.nubiit.com',
    likes: 125,
  },
  {
    title: 'Chasing the wind',
    author: 'Janet Chukwunta',
    url: 'https://dev.nubiit.com',
    likes: 180,
  },
  {
    title: 'Deformed',
    author: 'Chika Chukwunta',
    url: 'https://dev.nubiit.com',
    likes: 254,
  },
];

const blogsFromDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

module.exports = {
  blogs,
  blogsFromDb,
};
