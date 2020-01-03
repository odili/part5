import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

let component;
const handleclick = jest.fn();
beforeEach(() => {
  const blog = {
    title: 'Coming to America',
    author: 'Angus Navada',
    likes: 25,
  };
  component = render(<SimpleBlog blog={blog} onClick={handleclick} />);
});

test('component renders the title, author and amount of likes', () => {
  const title = component.container.querySelector('.titleAuthor');
  expect(title).toHaveTextContent('Coming to America Angus Navada');

  const likes = component.container.querySelector('.likes');
  expect(likes).toHaveTextContent('blog has 25 likes');
});

test('clicking like button twice fires event handler twice', () => {
  const button = component.getByText('like');
  fireEvent.click(button);
  fireEvent.click(button);
  expect(handleclick.mock.calls.length).toBe(2);
});
