require('webpack-jquery-ui/autocomplete.js')
require('webpack-jquery-ui/css.js')

export function setAutocomleteCountryValue(countries) {
  $('#registerCountry').autocomplete({
    source: Object.keys(countries),
  })
}

export function setAutocompleteCities(cities) {
  $('#registerCity').autocomplete({
    source: cities,
  })
}
