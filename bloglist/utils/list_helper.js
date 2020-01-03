const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  return blogs
    .map(blog => blog.likes)
    .reduce((sum, curent) => {
      return sum + curent;
    }, 0);
};

const favoriteBlog = blogs => {
  const maxLike = Math.max(...blogs.map(b => b.likes));
  const { title, author, likes } = blogs.filter(
    blog => blog.likes === maxLike
  )[0];
  return { title, author, likes };
};

const mostBlogs = blogs => {
  const count = {};
  blogs.forEach(blog => {
    if (count[blog.author] === undefined) {
      count[blog.author] = 1;
    } else {
      count[blog.author] += 1;
    }
  });
  const most = Math.max(...Object.values(count));
  console.log(most, count);
  return {
    author: Object.keys(count).find(key => count[key] === most),
    blogs: most,
  };
};
const mostLikes = blogs => {
  const count = {};
  blogs.forEach(blog => {
    if (count[blog.author] === undefined) {
      count[blog.author] = blog.likes;
    } else {
      count[blog.author] += blog.likes;
    }
  });
  const most = Math.max(...Object.values(count));
  console.log(most, count);
  return {
    author: Object.keys(count).find(key => count[key] === most),
    likes: most,
  };
};
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
