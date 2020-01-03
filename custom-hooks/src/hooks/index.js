import React from 'react'
import axios from 'axios'

export const useResource = (url) => {
  const [values, setValue] = React.useState([])

  React.useEffect(()=>{
    const getAll = async () => {
      const request = await axios.get(url)
      return request.data
    }
    const loadData = async () => {
      const data = await getAll()
      setValue(data)
    }
    loadData()
  },[url])

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

// const getAll = async () => {
//   const request = await axios.get(url)
//   return request.data
// }

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(url, newObject, config)
  return response.data
}

const update = async  (id, newObject) => {
  const request = await axios.put(`${ url } /${id}`, newObject)
  return request.data
}

  return [values, { create, update, setToken, setValue }]
}



export const useField = type => {
  const [value, setValue] = React.useState('');

  const onChange = event => {
    setValue(event.target.value);
  };
  const reset = (initialValue = '') => {
    setValue(initialValue);
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};