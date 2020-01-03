import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
jest.mock('./services/blogs');

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(<App />);
    component.rerender(<App />);

    await waitForElement(() => component.getByText('login'));

    expect(component.container).toHaveTextContent('log in to application');

    const blogList = document.querySelector('.blog-list');
    expect(blogList).not.toBeInTheDocument();
  });
});
