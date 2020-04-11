import axios from 'axios'
import API_ENV from '../config/api.config'
import {
  setAutocomleteCountryValue,
  setAutocompleteCities,
} from '../plugins/autocomplete'

//elements Ui
const countryInput = document.getElementById('registerCountry')
const citiesInput = document.getElementById('registerCity')

getCountries().then((countries) => {
  const autocompleteCoutries = serealizeCoutry(countries)
  setAutocomleteCountryValue(autocompleteCoutries)
  getAutocompleteCountries(autocompleteCoutries)
})

function getAutocompleteCountries(countries) {
  countryInput.addEventListener('change', ({ target }) => {
    const index = countries[target.value]
    citiesInput.disabled = true

    if (index) {
      getCities(index).then((cities) => {
        setAutocompleteCities(cities)
        citiesInput.disabled = false
      })
    }
  })
}

export async function getCountries() {
  try {
    const response = await axios.get(`${API_ENV.apiUrl}/location/get-countries`)
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getCities(index) {
  try {
    const response = await axios.get(
      `${API_ENV.apiUrl}/location/get-cities/${index}`
    )
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export function serealizeCoutry(countries) {
  return Object.entries(countries).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
  }, {})
}
