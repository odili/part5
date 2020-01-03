import React from 'react';
import removeReset from '../utils/removeReset';

const NewBlogForm = ({ createBlog, title, author, url, likes }) => {
  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={createBlog}>
        <label>
          title:{'  '}
          <input name="title" placeholder="title" {...removeReset(title)} />
        </label>
        <label>
          author:{'  '}
          <input name="author" placeholder="author" {...removeReset(author)} />
        </label>
        <label>
          url:{'  '}
          <input name="url" placeholder="url" {...removeReset(url)} />
        </label>
        <label>
          likes:{'  '}
          <input name="likes" placeholder="3 likes" {...removeReset(likes)} />
        </label>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
