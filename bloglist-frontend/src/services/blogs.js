import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  // console.log(response.data);
  return response.data;
};

const create = async newDraft => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newDraft, config);
  return response.data;
};

const like = async (id, likedBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`, likedBlog);
  // console.log(response.data);
  return response.data;
};

const remove = async id => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default {
  getAll,
  create,
  setToken,
  like,
  remove,
};
