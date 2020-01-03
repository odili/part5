import React from 'react';
import PropTypes from 'prop-types';
import BlogDetails from './BlogDetails';

const Blog = ({ blog, likeBlog, user, removeBlog }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="blog-list" onClick={toggleDetails}>
        {blog.title} {blog.author}
      </div>
      {showDetails && (
        <BlogDetails
          blog={blog}
          likeBlog={likeBlog}
          user={user}
          removeBlog={removeBlog}
        />
      )}
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  likeBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Blog;
