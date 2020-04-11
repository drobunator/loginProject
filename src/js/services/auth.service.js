import axios from 'axios'
import API_ENV from '../config/api.config'

/**
 * Function login. Make login request to API
 * @param {String} email
 * @param {String} password
 */

export async function login(email, password) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}

export async function register(userData) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/signup`,
      JSON.stringify(userData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(response)
    return response
  } catch (error) {
    return Promise.reject(err)
  }
}
