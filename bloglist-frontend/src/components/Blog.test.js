import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blog from './Blog';

let component;
const handleclick = jest.fn();
const removeBlog = jest.fn();
const toggleDetails = jest.fn();
const user = {
  id: 1234,
  username: 'chada',
  name: 'chada grudu',
};
beforeEach(() => {
  const blog = {
    title: 'How to get started with React in 2020',
    author: 'selbekk',
    url: 'https://dev.to/selbekk/how-to-get-started-with-react-in-2020-4po3',
    likes: 25,
    user: {
      username: 'chaka',
      name: 'Chaka Dazunga',
      id: '5e09e93f575fd3027c308fe1',
    },
    id: '5e062dbab97bce0001dbc46f',
  };
  component = render(
    <Blog
      blog={blog}
      removeBlog={removeBlog}
      likeBlog={handleclick}
      user={user}
    />
  );
});

test('only the title and author', () => {
  const list = component.container.querySelector('.blog-list');
  expect(list).toHaveTextContent(
    'How to get started with React in 2020 selbekk'
  );
});

test('clicking like button twice fires event handler twice', () => {
  const div = component.container.querySelector('.blog-list');
  // console.log(div);
  fireEvent.click(div);
  fireEvent.click(div);
  expect(toggleDetails.mock.calls.length).toBe(2);
});
