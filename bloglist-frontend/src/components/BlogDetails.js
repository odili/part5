import React from 'react';

const BlogDetails = ({ blog, likeBlog, user, removeBlog }) => {
  return (
    <div className="blog-details">
      <p>
        <a href={blog.url}>{blog.url}</a>
      </p>
      <p>
        {`${blog.likes}  likes  `}
        <button value={blog.id} onClick={likeBlog}>
          like
        </button>
      </p>
      <p>
        <small>{`added by ${blog.user.name}`}</small>
      </p>
      {blog.user.name === user.name ? (
        <button value={blog.id} onClick={removeBlog}>
          remove
        </button>
      ) : null}
    </div>
  );
};

export default BlogDetails;
