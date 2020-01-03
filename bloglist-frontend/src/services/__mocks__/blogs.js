const blogs = [
  {
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
  },
  {
    title: 'Implementing i18next to Your React Application',
    author: 'Wing-Kam',
    url:
      'https://dev.to/wingkwong/implementing-i18next-to-your-react-application-ie1',
    likes: 5,
    user: {
      username: 'semeka',
      name: 'Sangu Emeka',
      id: '5e09e9b0575fd3027c308fe2',
    },
    id: '5e062e5cb97bce0001dbc470',
  },
  {
    title: '5 Free Tutorials You Should Complete to Master the Back-End',
    url:
      'https://dev.to/saeeddev/5-free-tutorials-you-should-complete-to-master-the-back-end-3077',
    likes: 45,
    author: 'Saeed Ahmed',
    user: {
      username: 'okadavid',
      name: 'Okata David',
      id: '5e09e9d7575fd3027c308fe3',
    },
    id: '5e08052b88db5953fb8dc4c9',
  },
  {
    title: 'React + Redux = React + Context',
    author: 'Kabeer Khan',
    url: 'https://dev.to/droidmakk/react-redux-react-context-3483',
    likes: 4,
    user: {
      username: 'chaka',
      name: 'Chaka Dazunga',
      id: '5e09e93f575fd3027c308fe1',
    },
    id: '5e0a71c54878e60fbcf1c8ce',
  },
  {
    title: 'What Is JavaScript Made Of?',
    author: 'Dan Abramov',
    url: 'https://overreacted.io/what-is-javascript-made-of/',
    likes: 5,
    user: {
      username: 'chaka',
      name: 'Chaka Dazunga',
      id: '5e09e93f575fd3027c308fe1',
    },
    id: '5e0b462f7ee2c15525b8d902',
  },
];

const getAll = () => {
  return Promise.resolve(blogs);
};

export default { getAll };
