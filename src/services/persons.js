import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }
