import React from 'react';
import removeReset from '../utils/removeReset';

const LoginForm = ({ handleLogin, username, password }) => {
  return (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleLogin}>
        <label>
          username <input name="username" {...removeReset(username)} />
        </label>
        <label>
          password <input name="password" {...removeReset(password)} />
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
