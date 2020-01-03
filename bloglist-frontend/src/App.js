import React from 'react';
import blogServices from './services/blogs';
import loginService from './services/login';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import ErrorNotification from './components/ErrorNotification';
import SusccessNotification from './components/SuccessNotification';
import NewBlogForm from './components/NewBlogForm';
import Togglable from './components/Togglable';
import { arrayObjectSort } from './utils/arrayObjectSort';
import { useField } from './hooks';

function App() {
  const [blogs, setBlogs] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const username = useField('text');
  const password = useField('password');
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const title = useField('text');
  const author = useField('text');
  const url = useField('text');
  const likes = useField('number');
  const blogFormRef = React.createRef();

  React.useEffect(() => {
    const loadBlogs = async () => {
      const data = await blogServices.getAll();
      setBlogs(data);
    };
    // blogServices.getAll().then(data => {
    //   setBlogs(data);
    // });
    loadBlogs();
  }, []);

  React.useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInBlogUser');
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON);
      setUser(user);
      blogServices.setToken(user.token);
    }
  }, []);

  const sortedBlogs = blogs.sort(arrayObjectSort('likes', 'desc'));

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value,
      });
      window.localStorage.setItem('loggedInBlogUser', JSON.stringify(user));
      blogServices.setToken(user.token);
      setUser(user);
      username.reset();
      password.reset();
      setSuccessMessage(`welcome ${user.name}`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (error) {
      setErrorMessage('Wrong credentials');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setSuccessMessage(`bye ${user.name}`);
    setTimeout(() => {
      setSuccessMessage(null);
      window.location.reload();
    }, 3000);
  };

  const createBlog = async e => {
    e.preventDefault();
    const newBlog = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: likes.value,
    };
    try {
      const createdBlog = await blogServices.create(newBlog);
      setBlogs(blogs.concat(createdBlog));
      title.reset();
      author.reset();
      url.reset();
      likes.reset(0);
      setSuccessMessage(`${createdBlog.title} added successfully !`);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const likeBlog = async e => {
    const likedBlog = blogs.find(b => b.id === e.target.value);
    const update = {
      title: likedBlog.title,
      author: likedBlog.author,
      likes: likedBlog.likes + 1,
      url: likedBlog.url,
    };
    try {
      const returnedBlog = await blogServices.like(likedBlog.id, update);
      // console.log(returnedBlog);
      const newBlogs = blogs.filter(b => b.id !== likedBlog.id);
      setBlogs(newBlogs.concat({ ...likedBlog, likes: returnedBlog.likes }));
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const removeBlog = async e => {
    const blogToRemove = blogs.find(b => b.id === e.target.value);

    try {
      if (window.confirm(`remove blog "${blogToRemove.title}" ?`)) {
        await blogServices.remove(blogToRemove.id);
        setBlogs(blogs.filter(b => b.id !== blogToRemove.id));
        setSuccessMessage(`${blogToRemove.title} removed !`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  if (user === null) {
    return (
      <LoginForm
        handleLogin={handleLogin}
        username={username}
        password={password}
      />
    );
  }

  return (
    <div className="App">
      <header>
        <SusccessNotification success={successMessage} />
        <ErrorNotification message={errorMessage} />
      </header>
      <main>
        <h2> blogs</h2>
        <p>
          {user.name} logged in <button onClick={handleLogout}>logout</button>
        </p>
        <Togglable buttonLabel="add blog" ref={blogFormRef}>
          <NewBlogForm
            createBlog={createBlog}
            title={title}
            author={author}
            url={url}
            likes={likes}
          />
        </Togglable>
        <div>
          {sortedBlogs.map(blog => (
            <Blog
              key={blog.id}
              blog={blog}
              likeBlog={likeBlog}
              user={user}
              removeBlog={removeBlog}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
