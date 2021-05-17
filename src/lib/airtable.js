import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.airtable.com/v0/appgkB4vuL7mE7q4S',
  // commbocc@gmail.com account read only api key
  headers: { Authorization: `Bearer key1XrFuYhG1GKHvu` },
})
